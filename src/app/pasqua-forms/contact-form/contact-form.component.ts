import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ContactService } from '../../api/contact.service';
import { ContactModel, ApiContact } from '../../model/contact.model';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  public pendingResponse = false;

  public contactForm: FormGroup;
  public contactSuccess: boolean = false;
  public errorContactForm: boolean = false;

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
  /* */

  /* Methods */
  private initializeDefaultContact(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      comment: new FormControl('', Validators.required)
    });
  }
  /* */

  /* Events */
  public onSubmitForm(value: ApiContact) {
    const contact = new ContactModel().fromApi(value);
    this.errorContactForm = false;
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
    this.errorContactForm = false;
    this.contactSuccess = true;
    // alert(`Mensaje enviado, nos pondremos en contacto tan pronto como sea posible.`);
    this.contactForm.reset();
  }

  public onApiError(err: Response) {
    this.pendingResponse = false;
    this.errorContactForm = true;
    //alert(`Ha habido algún error durante el envío. Comprueba que el formulario está correctamente rellenado.`);
  }
}
