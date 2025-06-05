import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisppiUsersUpdateUserBoxComponent } from './sisppi-users-update-user-box.component';

describe('SisppiUsersUpdateUserBoxComponent', () => {
  let component: SisppiUsersUpdateUserBoxComponent;
  let fixture: ComponentFixture<SisppiUsersUpdateUserBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SisppiUsersUpdateUserBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisppiUsersUpdateUserBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
