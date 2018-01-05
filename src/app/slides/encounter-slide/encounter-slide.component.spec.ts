import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterSlideComponent } from './encounter-slide.component';

describe('EncounterSlideComponent', () => {
  let component: EncounterSlideComponent;
  let fixture: ComponentFixture<EncounterSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
