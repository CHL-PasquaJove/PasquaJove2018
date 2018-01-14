import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeaderComponent } from './header/header.component';
import { TextBoxComponent } from './text-box/text-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BreadcrumbComponent,
    HeaderComponent,
    TextBoxComponent
  ],
  exports: [
    BreadcrumbComponent,
    HeaderComponent,
    TextBoxComponent
  ]
})
export class CommonComponentsModule { }
