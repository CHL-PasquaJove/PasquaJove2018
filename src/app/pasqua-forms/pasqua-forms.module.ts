import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { JoinFormComponent } from './join-form/join-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ContactFormComponent,
    JoinFormComponent
  ],
  exports: [
    ContactFormComponent,
    JoinFormComponent
  ]
})
export class PasquaFormsModule { }
