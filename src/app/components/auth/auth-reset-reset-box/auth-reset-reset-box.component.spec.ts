import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthResetResetBoxComponent } from './auth-reset-reset-box.component';

describe('AuthResetResetBoxComponent', () => {
  let component: AuthResetResetBoxComponent;
  let fixture: ComponentFixture<AuthResetResetBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthResetResetBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthResetResetBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
