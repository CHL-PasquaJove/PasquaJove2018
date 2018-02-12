import * as moment from 'moment';

import { ApiDateTime } from './api-datetime.model';


export interface ApiContact {
    /*  AUTO-GENERATED FIELDS BY THE API SERVER */
    _id?: string;
    timestamp?: string;

    name: string;
    email: string;
    comment: string;
}

export class ContactModel {
    private _id: string;
    private _timestamp: ApiDateTime;

    name: string;
    email: string;
    comment: string;

    public constructor() { }

    public fromApi(data: ApiContact): this {

        if (data._id) {
            this._id = data._id;
        }
        if (data.timestamp) {
            this._timestamp = new ApiDateTime().fromApi(data.timestamp);
        }

        this.name = data.name;
        this.email = data.email;
        this.comment = data.comment;

        return this;
    }

    public toApi(): ApiContact {
        const api: ApiContact = {
            name: this.name,
            email: this.email,
            comment: this.comment
        };

        if (this._id) {
            api._id = this._id;
        }
        if (this._timestamp) {
            api.timestamp = this._timestamp.toApi();
        }

        return api;
    }

    public get id(): string {
        return this._id;
    }
    public get timestamp(): ApiDateTime {
        return this._timestamp;
    }
}
