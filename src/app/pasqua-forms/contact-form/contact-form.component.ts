import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from '../../api/user.service';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public pendingResponse = false;

  public contactForm: FormGroup;

  @Output()
  public toJoin = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit() {
    // Default Contact
    this.initializeDefaultContact();
  }

  /* Properties */
  /* */

  /* Methods */
  private initializeDefaultContact(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.required)
    });
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
}
