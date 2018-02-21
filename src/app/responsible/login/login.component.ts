import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LoginService, ApiErrorHelper } from '../../api';
import { LoginModel, ApiLogin } from '../../model/login.model';
import { ErrorResponse } from '../../model/error-response.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public errorFormMessage: string;
  public returnUrl: string;

  public pendingResponse = false;

  constructor(public loginService: LoginService,
              public router: Router,
              public route: ActivatedRoute,
              public apiErrorHelper: ApiErrorHelper) { }

  ngOnInit() {
    this.loginService.logout();
    this.loadReturnUrl();
    this.initializeForm();
  }

  /* Properties */
  public get canSendForm() {
    return this.loginForm.valid && !this.pendingResponse;
  }
  public get hasErrorMessage(): boolean {
    return !!this.errorFormMessage;
  }
  /* */

  /* Methods */
  private initializeForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }
  private loadReturnUrl() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'responsible';
  }
  public clearError() {
    this.errorFormMessage = '';
  }
  /* */

  /* Events */
  public onSubmitForm(value) {
    const login = new LoginModel().fromApi(value);
    this.clearError();
    this.pendingResponse = true;
    this.loginService
      .login(login)
      .subscribe(
        (u) => this.onLogin(u['auth-token']),
        (err) => this.onApiError(err)
      );
  }

  public onLogin(token: string) {
    this.pendingResponse = false;
    this.clearError();
    this.router.navigate([this.returnUrl]);

    this.loginForm.reset();
  }

  public onApiError(resp) {
    const handlers = [
      this.apiErrorHelper.baseMap,
      { '403': () => 'Login incorrecto' },
      this.apiErrorHelper.createFormHandler(this.loginForm)
    ];

    this.clearError();
    this.pendingResponse = false;
    this.apiErrorHelper.handle(resp, handlers, (m) => this.errorFormMessage = m);
  }
}
