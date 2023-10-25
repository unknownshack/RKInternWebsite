import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorVisaComponent } from './visitor-visa.component';

describe('VisitorVisaComponent', () => {
  let component: VisitorVisaComponent;
  let fixture: ComponentFixture<VisitorVisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorVisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorVisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
