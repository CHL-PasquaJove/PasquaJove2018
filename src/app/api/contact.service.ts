import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import { ContactModel, ApiContact } from '../model/contact.model';
import { BaseService } from './base.service';


@Injectable()
export class ContactService extends BaseService {
  constructor(protected http: Http) {
    super(http);
  }

  public newContact(contact: ContactModel): Observable<ContactModel> {
    const method = 'newContact';
    const reqBody = contact.toApi();

    return this.doRequest(method, reqBody)
            .map((res) => {
              const resBody: ApiContact = res.json();
              return new ContactModel().fromApi(resBody);
            });
  }

  public getContacts(): Observable<Array<ContactModel>> {
    const method = 'getContacts';

    return this.doRequest(method)
            .map((res) => {
              const body: ApiContact[] = res.json();
              return body.map( (u) => (new ContactModel().fromApi(u)) );
            });
  }
}
