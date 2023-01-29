import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodTransfertComponent } from './blood-transfert.component';

describe('BloodTransfertComponent', () => {
  let component: BloodTransfertComponent;
  let fixture: ComponentFixture<BloodTransfertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodTransfertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodTransfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
