import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../../api/user.service';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.scss']
})
export class JoinFormComponent implements OnInit {
  public static MAX_YEAR = 2001;
  public static MIN_YEAR = 1988;

  public years: Array<number>;
  public months: Array<number>;
  public days: Array<number>;

  public pendingResponse = false;

  public user: UserModel;

  public userForm: FormGroup;

  @Output()
  public toContacts = new EventEmitter();

  constructor(private userService: UserService) { }

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
  /* */

  /* Methods */
  private initializeDefaultUser(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      birth: new FormGroup({
        day: new FormControl(null, Validators.required),
        month: new FormControl(null, Validators.required),
        year: new FormControl(null, Validators.required)
      }),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^(\+\d\d(\ )*)?(\d+(\ )?)+$/)]),
      invitedBy: new FormControl('', Validators.required),
      group: new FormControl(''),
      comments: new FormControl('')
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
    const { year, month, day } = this.userForm.value.birth;

    const days = new Date(year, month, 0).getDate();
    this.days = this.range(1, days);

    if (day > days) {
      (this.userForm.controls['birth'] as FormGroup)
                    .controls['day'].setValue(days);
    }
  }
  /* */

  /* Events */
  public onSubmitForm(value) {
    const { birth, ...apiUser } = value;
    apiUser.birth = birth.day + '/' + birth.month + '/' + birth.year;
    const user = new UserModel().fromApi(apiUser);

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
    alert(`Registro completado. Se ha enviado un email de confirmación a ${user.email}`);
  }

  public onApiError(err: Response) {
    this.pendingResponse = false;
    alert(`Ha habido algún error durante el registro. Comprueba que el formulario esta correctamente rellenado.`);
  }
  /* */
}
