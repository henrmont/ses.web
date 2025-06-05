import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisppiUsersCreateUserBoxComponent } from './sisppi-users-create-user-box.component';

describe('SisppiUsersCreateUserBoxComponent', () => {
  let component: SisppiUsersCreateUserBoxComponent;
  let fixture: ComponentFixture<SisppiUsersCreateUserBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SisppiUsersCreateUserBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisppiUsersCreateUserBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
