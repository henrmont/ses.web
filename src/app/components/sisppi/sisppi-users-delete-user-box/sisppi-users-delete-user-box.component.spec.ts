import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisppiUsersDeleteUserBoxComponent } from './sisppi-users-delete-user-box.component';

describe('SisppiUsersDeleteUserBoxComponent', () => {
  let component: SisppiUsersDeleteUserBoxComponent;
  let fixture: ComponentFixture<SisppiUsersDeleteUserBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SisppiUsersDeleteUserBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisppiUsersDeleteUserBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
