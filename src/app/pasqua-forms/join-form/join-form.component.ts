import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";

import {UserService} from "../../api/user.service";
import {UserModel} from "../../model/user.model";
import {ErrorResponse} from "../../model/error-response.model";

@Component({
  selector: "join-form",
  templateUrl: "./join-form.component.html",
  styleUrls: ["./join-form.component.scss"]
})
export class JoinFormComponent implements OnInit {
  public static MAX_YEAR = 2002;
  public static MIN_YEAR = 1988;

  public years: Array<number>;
  public months: Array<number>;
  public days: Array<number>;

  public pendingResponse = false;

  public user: UserModel;

  public userForm: FormGroup;

  @Output()
  public toContacts = new EventEmitter();

  public registerSuccess: boolean = false;

  public joinFormErrorMessage: string;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    // Default User
    this.initializeDefaultUser();
    // Init date combos
    this.initializeDateCombos();
  }

  /* Properties */
  public get birth() {
    return this.user.birth.val;
  }

  public get canSendForm() {
    return this.userForm.valid && !this.pendingResponse;
  }

  public get joinFormError(): boolean {
    return !!this.joinFormErrorMessage;
  }

  /* */

  /* Methods */
  private initializeDefaultUser(): void {
    this.userForm = new FormGroup({
      name: new FormControl("", Validators.required),
      surname: new FormControl("", Validators.required),
      birth: new FormGroup({
        day: new FormControl(null, Validators.required),
        month: new FormControl(null, Validators.required),
        year: new FormControl(null, Validators.required)
      }),
      email: new FormControl("", [Validators.required, Validators.email]),
      phone: new FormControl("", [Validators.required, Validators.pattern(/^(\+\d\d(\ )*)?(\d+(\ )?)+$/)]),
      invitedBy: new FormControl("", Validators.required),
      group: new FormControl(""),
      comments: new FormControl("")
    });
  }

  private initializeDateCombos(): void {
    this.years = this.range(JoinFormComponent.MIN_YEAR,
      JoinFormComponent.MAX_YEAR, false);
    this.months = this.range(1, 12);
    this.refreshDays();
  }

  public range(from, to, asc = true) {
    const f = asc ? ((_, i) => from + i) :
      ((_, i) => to - i);
    return Array.apply(null, Array(to - from + 1)).map(f);
  }

  public refreshDays() {
    const {year, month, day} = this.userForm.value.birth;

    const days = new Date(year, month, 0).getDate();
    this.days = this.range(1, days);

    if (day > days) {
      (this.userForm.controls["birth"] as FormGroup)
        .controls["day"].setValue(days);
    }
  }

  public clearError() {
    this.joinFormErrorMessage = "";
  }

  /* */

  /* Events */
  public onSubmitForm(value) {
    const {birth, ...apiUser} = value;
    apiUser.birth = birth.day + "/" + birth.month + "/" + birth.year;

    const user = new UserModel().fromApi(apiUser);

    this.clearError();
    this.pendingResponse = true;
    this.userService
      .newUser(user)
      .subscribe(
        (u) => this.onUserRegistered(u),
        (err) => this.onApiError(err)
      );
  }

  public onUserRegistered(user: UserModel) {
    this.pendingResponse = false;
    this.clearError();

    this.registerSuccess = true;
    this.userForm.reset();
  }

  public onApiError(err) {
    this.clearError();
    this.pendingResponse = false;

    switch (err.status) {
      case 400: // Bad request
        const resp: ErrorResponse = err.json();

        resp.errors.forEach((e) => {
          this.userForm.controls[e.field].setErrors({"incorrect": true});
        });
        this.joinFormErrorMessage = "Hay campos con error. Revisa que estén correctamente rellenados";
        break;

      case 504: // Gateway timeout
      default:
        console.error("Error en el servidor", err);
        this.joinFormErrorMessage = "Ha habido un error durante el envío del formulario. Contacta con los responsables, por favor.";
        break;
    }
  }

  /* */
}
