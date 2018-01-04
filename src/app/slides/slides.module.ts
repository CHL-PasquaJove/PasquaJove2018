import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialSlideComponent } from './initial-slide/initial-slide.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { WhatSlideComponent } from './what-slide/what-slide.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule
  ],
  declarations: [InitialSlideComponent, WhatSlideComponent],
  exports: [InitialSlideComponent, WhatSlideComponent]
})
export class SlidesModule { }
