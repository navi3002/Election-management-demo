import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagepartypageComponent } from './managepartypage.component';

describe('ManagepartypageComponent', () => {
  let component: ManagepartypageComponent;
  let fixture: ComponentFixture<ManagepartypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagepartypageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagepartypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
