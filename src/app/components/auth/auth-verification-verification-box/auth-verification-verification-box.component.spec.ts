import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthVerificationVerificationBoxComponent } from './auth-verification-verification-box.component';

describe('AuthVerificationVerificationBoxComponent', () => {
  let component: AuthVerificationVerificationBoxComponent;
  let fixture: ComponentFixture<AuthVerificationVerificationBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthVerificationVerificationBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthVerificationVerificationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
