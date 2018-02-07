import * as moment from 'moment';

export class ApiDate {
    public static API_FORMAT = 'DD/MM/YYYY';

    public val: moment.Moment;

    public fromApi(data: string): this {
        this.val = moment(data, ApiDate.API_FORMAT);

        return this;
    }

    public toApi(): string {
        return this.val.format(ApiDate.API_FORMAT);
    }
}
