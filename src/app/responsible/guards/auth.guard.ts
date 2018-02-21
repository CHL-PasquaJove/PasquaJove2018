import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, NavigationExtras,
         ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/observable/of';

import { LoginService } from '../../api';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
                private loginService: LoginService) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const extras: NavigationExtras = {
            queryParams: { returnUrl: state.url.substring(1) }
        };
        if (localStorage.getItem('token')) {
            // logged in so return true
            const $keepAlive = this.loginService
                .keepAlive()
                .map(() => true)
                .catch((err) => {
                    console.log(err);
                    this.router.navigate(['responsible/login'], extras);
                    return Observable.of(false);
                });
            return $keepAlive;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['responsible/login'], extras);
        return false;
    }

    public onKeepAlive(): void {

    }
}
