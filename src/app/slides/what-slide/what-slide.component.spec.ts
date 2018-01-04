import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatSlideComponent } from './what-slide.component';

describe('WhatSlideComponent', () => {
  let component: WhatSlideComponent;
  let fixture: ComponentFixture<WhatSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
