import { Component, Input } from '@angular/core';

@Component({
  selector: 'quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
  @Input()
  public owner: string;

  constructor() { }
}
