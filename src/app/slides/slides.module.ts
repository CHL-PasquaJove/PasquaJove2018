import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InitialSlideComponent } from './initial-slide/initial-slide.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { PasquaFormsModule } from '../pasqua-forms/pasqua-forms.module';
import { WhatSlideComponent } from './what-slide/what-slide.component';
import { EncounterSlideComponent } from './encounter-slide/encounter-slide.component';
import { ThisEasterSlideComponent } from './this-easter-slide/this-easter-slide.component';
import { JoinContactSlideComponent } from './join-contact-slide/join-contact-slide.component';
import { SlidesComponent } from './slides/slides.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([]),

    CommonComponentsModule,
    PasquaFormsModule
  ],
  declarations: [
    InitialSlideComponent,
    WhatSlideComponent,
    EncounterSlideComponent,
    ThisEasterSlideComponent,
    JoinContactSlideComponent,
    SlidesComponent
  ],
  exports: [
    InitialSlideComponent,
    WhatSlideComponent,
    EncounterSlideComponent,
    ThisEasterSlideComponent,
    JoinContactSlideComponent
  ]
})
export class SlidesModule { }
