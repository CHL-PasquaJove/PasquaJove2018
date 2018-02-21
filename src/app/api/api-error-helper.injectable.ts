import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { ErrorResponse } from '../model/error-response.model';

export type ApiErrorHandler = (resp: Response, err: ErrorResponse) => string;
export type ApiErrorCallback = (message: string) => void;

export interface ApiErrorMap {
    [k: string]: ApiErrorHandler;
}

@Injectable()
export class ApiErrorHelper {
    private _baseMap: ApiErrorMap = {
        '504': () => 'Ha habido un error durante el envío del formulario. Contacta con los responsables, por favor.',
        '401': () => {
            const extras: NavigationExtras = {
                queryParams: { returnUrl: this.router.url.substring(1) }
            };
            this.router.navigate(['responsible/login'], extras);
            return 'No autorizado';
        }
    };

    constructor(private router: Router) {}

    /* Properties */
    public get baseMap(): ApiErrorMap {
        return this._baseMap;
    }
    /* */

    /* Methods */
    public handle(resp: Response, maps: ApiErrorMap[], cb: ApiErrorCallback = null): void {
        const body = resp.json();
        maps.forEach(map => {
            const handler = map[resp.status.toString()];
            if (handler) {
                const message = handler(resp, body);
                if (cb) {
                    cb(message);
                }

                return;
            }
        });
    }
    public createFormHandler(form: FormGroup): ApiErrorMap {
        return {
            '400': (resp, err) => {
                err.errors.forEach((e) => {
                    form.controls[e.field].setErrors({'incorrect': true});
                });
                return 'Hay campos con error. Revisa que estén correctamente rellenados';
            }
        };
    }
    /* */
}
