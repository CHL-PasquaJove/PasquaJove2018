import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeaderComponent } from './header/header.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotesComponent } from './quotes/quotes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BreadcrumbComponent,
    HeaderComponent,
    TextBoxComponent,
    QuoteComponent,
    QuotesComponent
  ],
  exports: [
    BreadcrumbComponent,
    HeaderComponent,
    TextBoxComponent,
    QuoteComponent,
    QuotesComponent
  ]
})
export class CommonComponentsModule { }
