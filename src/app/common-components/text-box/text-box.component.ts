import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent implements OnInit {

  @Input() public messageText: string;
  constructor() { }

  ngOnInit() {
  }

}
