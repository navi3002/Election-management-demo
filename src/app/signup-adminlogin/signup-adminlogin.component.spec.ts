import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAdminloginComponent } from './signup-adminlogin.component';

describe('SignupAdminloginComponent', () => {
  let component: SignupAdminloginComponent;
  let fixture: ComponentFixture<SignupAdminloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupAdminloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAdminloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
