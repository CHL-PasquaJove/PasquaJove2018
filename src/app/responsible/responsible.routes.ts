import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ResponsibleComponent } from './responsible/responsible.component';
import { InscriptionsComponent } from './inscriptions/inscriptions.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './guards/auth.guard';


const responsibleTabRoutes: Routes = [
  { path: '', redirectTo: 'inscriptions', pathMatch: 'prefix' },
  { path: 'inscriptions', component: InscriptionsComponent },
  { path: 'messages', component: MessagesComponent }
];

const responsibleChildrenRoutes: Routes = [
  { path: '', component: ResponsibleComponent,
    canActivate: [AuthGuard], children: responsibleTabRoutes },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' },
];

export const responsibleRoutes: Routes = [
    { path: 'responsible', children: responsibleChildrenRoutes },
  ];
