import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ContactService } from '../../api/contact.service';
import { ContactModel, ApiContact } from '../../model/contact.model';
import { ErrorResponse } from '../../model/error-response.model';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public pendingResponse = false;

  public contactForm: FormGroup;
  public contactSuccess: boolean = false;

  public errorContactFormMessage: string;

  @Output()
  public toJoin = new EventEmitter();

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    // Default Contact
    this.initializeDefaultContact();
  }

  /* Properties */
  public get canSendForm() {
    return this.contactForm.valid && !this.pendingResponse;
  }
  public get errorContactForm(): boolean {
    return !!this.errorContactFormMessage;
  }
  /* */

  /* Methods */
  private initializeDefaultContact(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      comment: new FormControl('', Validators.required)
    });
  }
  public clearError() {
    this.errorContactFormMessage = '';
  }
  /* */

  /* Events */
  public onSubmitForm(value: ApiContact) {
    const contact = new ContactModel().fromApi(value);
    this.clearError();
    this.pendingResponse = true;
    this.contactService
      .newContact(contact)
      .subscribe(
        (u) => this.onUserRegistered(u),
        (err) => this.onApiError(err)
      );
  }

  public onUserRegistered(contact: ContactModel) {
    this.pendingResponse = false;
    this.contactSuccess = true;
    this.clearError();

    this.contactForm.reset();
  }

  public onApiError(err) {
    this.clearError();
    this.pendingResponse = false;

    switch (err.status) {
      case 400: // Bad request
        const resp: ErrorResponse = err.json();

        resp.errors.forEach((e) => {
          this.contactForm.controls[e.field].setErrors({'incorrect': true});
        });
        this.errorContactFormMessage = 'Hay campos con error. Revisa que estén correctamente rellenados';
        break;

      case 504: // Gateway timeout
      default:
        console.error('Error en el servidor', err);
        this.errorContactFormMessage = 'Ha habido un error durante el envío del formulario. Contacta con los responsables, por favor.';
        break;
    }
  }
}
