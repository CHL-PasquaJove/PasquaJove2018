import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import { UserModel, ApiUser } from '../model/user.model';
import { BaseService } from './base.service';


@Injectable()
export class UserService extends BaseService {
  constructor(protected http: Http) {
    super(http);
  }

  public newUser(user: UserModel): Observable<UserModel> {
    const method = 'newUser';
    const reqBody = user.toApi();

    return this.doRequest(method, reqBody)
            .map((res) => {
              const resBody: ApiUser = res.json();
              return new UserModel().fromApi(resBody);
            });
  }

  public getUsers(): Observable<Array<UserModel>> {
    const method = 'getUsers';

    return this.doRequest(method)
            .map((res) => {
              const body: ApiUser[] = res.json();
              return body.map( (u) => (new UserModel().fromApi(u)) );
            });
  }
}
