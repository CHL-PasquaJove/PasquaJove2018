import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SlidesModule } from './slides/slides.module';
import { UserService } from './api/user.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,

    SlidesModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
