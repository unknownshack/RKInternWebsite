import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvisaComponent } from './ivisa.component';

describe('IvisaComponent', () => {
  let component: IvisaComponent;
  let fixture: ComponentFixture<IvisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
