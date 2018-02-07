import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { UserModel, ApiUser } from '../model/user.model';


@Injectable()
export class UserService {
  constructor( private http: Http) { }

  public newUser(user: UserModel): Observable<UserModel> {
    const url = 'https://api.pascuajoven.com/api/newUser';
    const reqBody = user.toApi();

    return this.doRequest(url, reqBody)
            .map((res) => {
              const resBody: ApiUser = res.json();
              return new UserModel().fromApi(resBody);
            });
  }

  public getUsers(): Observable<Array<UserModel>> {
    const url = 'https://api.pascuajoven.com/api/getUsers';
    const reqBody = {};

    return this.doRequest(url, reqBody)
            .map((res) => {
              const body: ApiUser[] = res.json();
              return body.map( (u) => (new UserModel().fromApi(u)) );
            });
  }

  private doRequest(url, reqBody) {
    return this.http.post(url, reqBody);
  }
}
