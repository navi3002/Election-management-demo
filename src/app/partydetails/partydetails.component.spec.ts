import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartydetailsComponent } from './partydetails.component';

describe('PartydetailsComponent', () => {
  let component: PartydetailsComponent;
  let fixture: ComponentFixture<PartydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartydetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
