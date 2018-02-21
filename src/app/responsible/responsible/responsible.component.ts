import { Component, OnInit } from '@angular/core';

import { ResponsibleFactory } from '../responsible/responsible.factory';

@Component({
  selector: 'app-responsible',
  templateUrl: './responsible.component.html',
  styleUrls: ['./responsible.component.scss']
})
export class ResponsibleComponent implements OnInit {

  constructor(public rf: ResponsibleFactory) { }

  ngOnInit() {
    this.rf.init();
  }

  public get usersCount(): number {
    return this.rf.users ? this.rf.users.length : 0;
  }
  public get contactsCount(): number {
    return this.rf.contacts ? this.rf.contacts.length : 0;
  }
}
