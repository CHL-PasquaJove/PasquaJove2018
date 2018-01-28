import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'join-contact-slide',
  templateUrl: './join-contact-slide.component.html',
  styleUrls: ['./join-contact-slide.component.scss']
})
export class JoinContactSlideComponent implements OnInit {

  public openJoinForm: boolean = false;
  public openContactForm: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
