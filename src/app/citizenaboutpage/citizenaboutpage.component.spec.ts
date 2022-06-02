import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenaboutpageComponent } from './citizenaboutpage.component';

describe('CitizenaboutpageComponent', () => {
  let component: CitizenaboutpageComponent;
  let fixture: ComponentFixture<CitizenaboutpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenaboutpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenaboutpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
