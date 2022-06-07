import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterlistComponent } from './voterlist.component';

describe('VoterlistComponent', () => {
  let component: VoterlistComponent;
  let fixture: ComponentFixture<VoterlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoterlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
