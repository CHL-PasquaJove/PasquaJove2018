import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisEasterSlideComponent } from './this-easter-slide.component';

describe('ThisEasterSlideComponent', () => {
  let component: ThisEasterSlideComponent;
  let fixture: ComponentFixture<ThisEasterSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThisEasterSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisEasterSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
