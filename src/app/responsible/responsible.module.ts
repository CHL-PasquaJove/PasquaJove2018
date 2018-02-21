import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CommonComponentsModule } from '../common-components/common-components.module';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ResponsibleComponent } from './responsible/responsible.component';
import { ResponsibleFactory } from './responsible/responsible.factory';
import { KeepAliveDirective } from './directives/keep-alive.directive';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([]),

    CommonComponentsModule,
  ],
  providers: [AuthGuard, ResponsibleFactory],
  declarations: [LoginComponent, ResponsibleComponent, KeepAliveDirective, InscriptionsComponent, MessagesComponent]
})
export class ResponsibleModule { }
