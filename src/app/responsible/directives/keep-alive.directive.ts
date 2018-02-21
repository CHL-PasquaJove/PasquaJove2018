import { Directive, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

import { LoginService } from '../../api';


@Directive({
  selector: '[appKeepAlive]'
})
export class KeepAliveDirective implements OnInit, OnDestroy {
  private static REFRESH_TOKEN_RATE = 1000 * 60 * 30; // In milliseconds;

  private subscription: Subscription;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.initObservable();
  }

  ngOnDestroy() {
    this.stopObservable();
  }

  /* Methods */
  private initObservable(): void {
    console.log('Init');
    const $refreshToken = Observable
        .interval(KeepAliveDirective.REFRESH_TOKEN_RATE)
        .filter(() => this.loginService.hasToken)
        .switchMap(() => this.loginService
            .keepAlive()
            .catch(() => Observable.of())
        );

    this.subscription = $refreshToken.subscribe(
        () => console.log('refresh auth token')
    );
  }
  private stopObservable(): void {
    this.subscription.unsubscribe();
  }
  /* */

}
