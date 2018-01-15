import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialSlideComponent } from './initial-slide/initial-slide.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { WhatSlideComponent } from './what-slide/what-slide.component';
import { EncounterSlideComponent } from './encounter-slide/encounter-slide.component';
import { ThisEasterSlideComponent } from './this-easter-slide/this-easter-slide.component';
import { JoinContactSlideComponent } from './join-contact-slide/join-contact-slide.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule
  ],
  declarations: [
    InitialSlideComponent, 
    WhatSlideComponent, 
    EncounterSlideComponent, 
    ThisEasterSlideComponent, 
    JoinContactSlideComponent
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
