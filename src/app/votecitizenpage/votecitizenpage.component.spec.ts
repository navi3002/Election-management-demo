import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotecitizenpageComponent } from './votecitizenpage.component';

describe('VotecitizenpageComponent', () => {
  let component: VotecitizenpageComponent;
  let fixture: ComponentFixture<VotecitizenpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotecitizenpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotecitizenpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
