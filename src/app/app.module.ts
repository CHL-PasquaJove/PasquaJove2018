import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { SlidesModule } from './slides';
import { ResponsibleModule } from './responsible';
import { UserService, ContactService, LoginService,
         ApiErrorHelper} from './api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),

    SlidesModule,
    ResponsibleModule
  ],
  providers: [UserService, ContactService, LoginService, ApiErrorHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
