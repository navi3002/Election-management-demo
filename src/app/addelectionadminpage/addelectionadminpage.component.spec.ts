import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddelectionadminpageComponent } from './addelectionadminpage.component';

describe('AddelectionadminpageComponent', () => {
  let component: AddelectionadminpageComponent;
  let fixture: ComponentFixture<AddelectionadminpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddelectionadminpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddelectionadminpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
