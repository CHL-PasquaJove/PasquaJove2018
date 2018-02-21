import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import { LoginModel, ApiLogin } from '../model/login.model';
import { TokenModel, ApiToken } from '../model/token.model';
import { BaseService } from './base.service';


@Injectable()
export class LoginService extends BaseService {
  constructor(protected http: Http) {
    super(http);
  }

  public login(login: LoginModel): Observable<TokenModel> {
    const method = 'login';
    const reqBody = login.toApi();

    return this.doRequest(method, reqBody)
            .map((res) => {
              const resBody: ApiToken = res.json();
              const token = new TokenModel().fromApi(resBody);
              this.token = resBody.authToken;

              return token;
            });
  }

  public keepAlive(): Observable<TokenModel> {
    const method = 'keepAlive';

    return this.doRequest(method)
            .map((res) => {
              const resBody: ApiToken = res.json();
              const token = new TokenModel().fromApi(resBody);
              this.token = resBody.authToken;

              return token;
            });
  }

  public logout(): void {
    localStorage.removeItem('token');
  }

  public get token(): string {
    return localStorage.getItem('token');
  }
  public set token(v: string) {
    localStorage.setItem('token', v);
  }
  public get hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
