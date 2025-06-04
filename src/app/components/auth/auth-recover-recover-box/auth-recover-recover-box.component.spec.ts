import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRecoverRecoverBoxComponent } from './auth-recover-recover-box.component';

describe('AuthRecoverRecoverBoxComponent', () => {
  let component: AuthRecoverRecoverBoxComponent;
  let fixture: ComponentFixture<AuthRecoverRecoverBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthRecoverRecoverBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthRecoverRecoverBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
