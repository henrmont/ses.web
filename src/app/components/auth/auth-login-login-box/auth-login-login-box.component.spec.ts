import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoginLoginBoxComponent } from './auth-login-login-box.component';

describe('AuthLoginLoginBoxComponent', () => {
  let component: AuthLoginLoginBoxComponent;
  let fixture: ComponentFixture<AuthLoginLoginBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLoginLoginBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthLoginLoginBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
