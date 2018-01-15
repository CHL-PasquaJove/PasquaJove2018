import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinContactSlideComponent } from './join-contact-slide.component';

describe('JoinContactSlideComponent', () => {
  let component: JoinContactSlideComponent;
  let fixture: ComponentFixture<JoinContactSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinContactSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinContactSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
