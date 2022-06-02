import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagevotingpageComponent } from './managevotingpage.component';

describe('ManagevotingpageComponent', () => {
  let component: ManagevotingpageComponent;
  let fixture: ComponentFixture<ManagevotingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagevotingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagevotingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
