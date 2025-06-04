import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoginPage } from './auth-login.page';

describe('AuthLoginComponent', () => {
  let component: AuthLoginPage;
  let fixture: ComponentFixture<AuthLoginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLoginPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
