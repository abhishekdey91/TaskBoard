import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LpSectionComponent } from './lp-section.component';

describe('LpSectionComponent', () => {
  let component: LpSectionComponent;
  let fixture: ComponentFixture<LpSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LpSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LpSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
