import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizendetailsComponent } from './citizendetails.component';

describe('CitizendetailsComponent', () => {
  let component: CitizendetailsComponent;
  let fixture: ComponentFixture<CitizendetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizendetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizendetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
