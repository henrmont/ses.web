import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisppiUsersChangeRolesBoxComponent } from './sisppi-users-change-roles-box.component';

describe('SisppiUsersChangeRolesBoxComponent', () => {
  let component: SisppiUsersChangeRolesBoxComponent;
  let fixture: ComponentFixture<SisppiUsersChangeRolesBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SisppiUsersChangeRolesBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisppiUsersChangeRolesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
