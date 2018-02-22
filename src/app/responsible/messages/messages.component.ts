import { Component, HostBinding } from '@angular/core';
import * as moment from 'moment';

import { ApiDate } from '../../model/api-date.model';
import { ResponsibleFactory } from '../responsible/responsible.factory';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent  {
  @HostBinding('class.responsive-table') hasClass = true;

  constructor(public rf: ResponsibleFactory) { }

  public formatDate(date: ApiDate): string {
    const years = moment().diff(date.val, 'years');
    return `${years} | ${date.val.format('DD/MM/YYYY')}`;
  }
}
