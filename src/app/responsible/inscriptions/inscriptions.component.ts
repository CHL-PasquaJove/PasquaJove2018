import { Component, HostBinding } from '@angular/core';
import * as moment from 'moment';

import { ApiDate } from '../../model/api-date.model';
import { ResponsibleFactory } from '../responsible/responsible.factory';


@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.scss']
})
export class InscriptionsComponent  {
  @HostBinding('class.responsive-table') hasClass = true;

  constructor(public rf: ResponsibleFactory) { }

  public formatDate(date: ApiDate): string {
    const years = moment().diff(date.val, 'years');
    return `${years} | ${date.val.format('DD/MM/YYYY')}`;
  }
}
