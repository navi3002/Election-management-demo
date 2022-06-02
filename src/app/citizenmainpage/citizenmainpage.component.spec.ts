import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenmainpageComponent } from './citizenmainpage.component';

describe('CitizenmainpageComponent', () => {
  let component: CitizenmainpageComponent;
  let fixture: ComponentFixture<CitizenmainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenmainpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenmainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
