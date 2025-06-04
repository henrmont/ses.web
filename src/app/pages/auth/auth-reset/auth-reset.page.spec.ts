import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthResetPage } from './auth-reset.page';

describe('AuthResetPage', () => {
  let component: AuthResetPage;
  let fixture: ComponentFixture<AuthResetPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthResetPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthResetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
