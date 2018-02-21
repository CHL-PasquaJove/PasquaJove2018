import * as moment from 'moment';


export interface ApiLogin {
    email: string;
    password: string;
}

export class LoginModel {
    email: string;
    password: string;

    public constructor() { }

    public fromApi(data: ApiLogin): this {
        this.email = data.email;
        this.password = data.password;

        return this;
    }

    public toApi(): ApiLogin {
        const api: ApiLogin = {
            email: this.email,
            password: this.password
        };

        return api;
    }
}
