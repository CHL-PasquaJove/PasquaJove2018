import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeaderComponent } from './header/header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BreadcrumbComponent,
    HeaderComponent
  ],
  exports: [
    BreadcrumbComponent,
    HeaderComponent
  ]
})
export class CommonComponentsModule { }
