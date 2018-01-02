import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialSlideComponent } from './initial-slide/initial-slide.component';
import { CommonComponentsModule } from '../common-components/common-components.module';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule
  ],
  declarations: [InitialSlideComponent],
  exports: [InitialSlideComponent]
})
export class SlidesModule { }
