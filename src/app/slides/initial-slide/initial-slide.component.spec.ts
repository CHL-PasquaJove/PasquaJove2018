import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialSlideComponent } from './initial-slide.component';

describe('InitialSlideComponent', () => {
  let component: InitialSlideComponent;
  let fixture: ComponentFixture<InitialSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
