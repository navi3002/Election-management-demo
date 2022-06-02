import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecitizenPageComponent } from './managecitizen-page.component';

describe('ManagecitizenPageComponent', () => {
  let component: ManagecitizenPageComponent;
  let fixture: ComponentFixture<ManagecitizenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagecitizenPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecitizenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
