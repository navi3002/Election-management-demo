import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionManagementDescriptionComponent } from './election-management-description.component';

describe('ElectionManagementDescriptionComponent', () => {
  let component: ElectionManagementDescriptionComponent;
  let fixture: ComponentFixture<ElectionManagementDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionManagementDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionManagementDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
