import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteroutletComponent } from './routeroutlet.component';

describe('RouteroutletComponent', () => {
  let component: RouteroutletComponent;
  let fixture: ComponentFixture<RouteroutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteroutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteroutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
