import { Component } from '@angular/core';

@Component({
  selector: 'join-contact-slide',
  templateUrl: './join-contact-slide.component.html',
  styleUrls: ['./join-contact-slide.component.scss']
})
export class JoinContactSlideComponent {
  public openJoinForm: boolean = false;
  public openContactForm: boolean = false;

  constructor() {}
}
