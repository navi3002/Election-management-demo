import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecandidatepageComponent } from './managecandidatepage.component';

describe('ManagecandidatepageComponent', () => {
  let component: ManagecandidatepageComponent;
  let fixture: ComponentFixture<ManagecandidatepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagecandidatepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecandidatepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
