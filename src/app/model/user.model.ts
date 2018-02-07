import * as moment from 'moment';

import { Food } from './food.model';
import { ApiDateTime } from './api-datetime.model';
import { ApiDate } from './api-date.model';


export interface ApiUser {
    /*  AUTO-GENERATED FIELDS BY THE API SERVER */
    _id?: string;
    timestamp?: string;

    name: string;
    surname?: string;
    email: string;
    birth: string;
    phone: string;
    group?: string;
    food?: Array<Food>;
    invitedBy: string;
}

export class UserModel {
    private _id: string;
    private _timestamp: ApiDateTime;

    public name: string;
    public surname: string;
    public email: string;
    public birth: ApiDate;
    public phone: string;
    public group: string;
    public food: Array<Food>;
    public invitedBy: string;

    public constructor() { }

    public fromApi(data: ApiUser): this {

        if (data._id) {
            this._id = data._id;
        }
        if (data.timestamp) {
            this._timestamp = new ApiDateTime().fromApi(data.timestamp);
        }

        this.name = data.name;
        this.surname = data.surname;
        this.email = data.email;
        this.birth = new ApiDate().fromApi(data.birth);
        this.phone = data.phone;
        this.group = data.group;
        this.food = data.food;
        this.invitedBy = data.invitedBy;

        return this;
    }

    public toApi(): ApiUser {
        return {
            _id: this._id,
            timestamp: this._timestamp.toApi(),

            name: this.name,
            surname: this.surname,
            email: this.email,
            birth: this.birth.toApi(),
            phone: this.phone,
            group: this.group,
            food: this.food,
            invitedBy: this.invitedBy
        };
    }

    public get id(): string {
        return this._id;
    }
    public get timestamp(): ApiDateTime {
        return this._timestamp;
    }
}
