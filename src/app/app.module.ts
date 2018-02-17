import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { SlidesModule } from './slides/slides.module';
import { UserService } from './api/user.service';
import { ContactService } from './api/contact.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),

    SlidesModule
  ],
  providers: [UserService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
