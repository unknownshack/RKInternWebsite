import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyNowStepperComponent } from './apply-now-stepper.component';

describe('ApplyNowStepperComponent', () => {
  let component: ApplyNowStepperComponent;
  let fixture: ComponentFixture<ApplyNowStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyNowStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyNowStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
