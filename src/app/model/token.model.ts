import * as moment from 'moment';


export interface ApiToken {
    authToken: string;
}

export class TokenModel {
    authToken: string;

    public constructor() { }

    public fromApi(data: ApiToken): this {
        this.authToken = data.authToken;

        return this;
    }

    public toApi(): ApiToken {
        const api: ApiToken = {
            authToken: this.authToken
        };

        return api;
    }
}
