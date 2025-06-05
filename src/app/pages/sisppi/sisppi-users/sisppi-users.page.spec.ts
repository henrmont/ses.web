import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisppiUsersPage } from './sisppi-users.page';

describe('SisppiUsersPage', () => {
  let component: SisppiUsersPage;
  let fixture: ComponentFixture<SisppiUsersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SisppiUsersPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisppiUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
