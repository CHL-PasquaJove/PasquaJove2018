import * as moment from 'moment';

export class ApiDateTime {
    public static API_FORMAT = 'DD-MM-YYYY HH:mm:ss';

    public val: moment.Moment;

    public fromApi(data: string): this {
        this.val = moment(data, ApiDateTime.API_FORMAT);

        return this;
    }

    public toApi(): string {
        return this.val.format(ApiDateTime.API_FORMAT);
    }
}
