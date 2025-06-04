import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRecoverPage } from './auth-recover.page';

describe('AuthRecoverPage', () => {
  let component: AuthRecoverPage;
  let fixture: ComponentFixture<AuthRecoverPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthRecoverPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthRecoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
