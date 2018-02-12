import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ContactModel, ApiContact } from '../model/contact.model';


@Injectable()
export class ContactService {
  public baseUrl = 'https://api.pascuajoven.com'; // Should be on config
  constructor(private http: Http) { }

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
    const reqBody = {};

    return this.doRequest(method, reqBody)
            .map((res) => {
              const body: ApiContact[] = res.json();
              return body.map( (u) => (new ContactModel().fromApi(u)) );
            });
  }

  private doRequest(method, reqBody) {
    return this.http.post(`${this.baseUrl}/api/${method}`, reqBody);
  }

}
