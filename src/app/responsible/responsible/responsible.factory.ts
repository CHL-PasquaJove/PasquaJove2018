import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import { ContactModel } from '../../model/contact.model';
import { UserModel } from '../../model/user.model';
import { ContactService, UserService } from '../../api';


@Injectable()
export class ResponsibleFactory {
  public users: UserModel[];
  public contacts: ContactModel[];

  constructor(private userService: UserService,
              private contactService: ContactService) { }

  public init() {
    this.userService
      .getUsers()
      .subscribe(
        (users) => this.users = users
      );


    this.contactService
      .getContacts()
      .subscribe(
        (contacts) => this.contacts = contacts
      );
  }
}
