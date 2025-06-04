import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthVerificationPage } from './auth-verification.page';

describe('AuthVerificationPage', () => {
  let component: AuthVerificationPage;
  let fixture: ComponentFixture<AuthVerificationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthVerificationPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthVerificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
