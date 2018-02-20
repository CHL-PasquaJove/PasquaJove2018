import {Component, OnInit, AfterViewInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: "join-contact-slide",
  templateUrl: "./join-contact-slide.component.html",
  styleUrls: ["./join-contact-slide.component.scss"]
})
export class JoinContactSlideComponent implements OnInit, AfterViewInit {
  public openJoinForm: boolean = false;
  public openContactForm: boolean = false;
  private fragment: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe((params) => {
        const form = params.get("form");
        switch (form) {
          case "join":
            this.openJoinForm = true;
            break;

          case "contact":
            this.openContactForm = true;
            break;
        }
      });

    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });
  }

  ngAfterViewInit(): void {
    // Scroll to element if needed
    this.scrollToElement(this.fragment);
  }

  public scrollToElement(elementId: string): void {
    if (elementId === "") {
      return;
    }

    const element = document.getElementById(elementId);
    if (!element) {
      return;
    }

    element.scrollIntoView({block: "end", behavior: "smooth"});
  }
}
