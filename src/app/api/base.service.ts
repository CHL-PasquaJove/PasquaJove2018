import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';


export class BaseService {
  protected baseUrl = environment.apiBaseUrl;
  constructor(protected http: Http) { }

  private appendAuthToken(headers: Headers) {
    const token = localStorage.getItem('token');
    if (token) {
      headers.append('Authorization', token);
    }
  }

  protected doRequest(method: string, reqBody = {}) {
    const headers = new Headers();
    this.appendAuthToken(headers);

    return this.http.post(`${this.baseUrl}/api/${method}`, reqBody, {
      headers: headers
    });
  }
}
