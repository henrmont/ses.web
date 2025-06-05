import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisppiRolesChangePermissionsBoxComponent } from './sisppi-roles-change-permissions-box.component';

describe('SisppiRolesChangePermissionsBoxComponent', () => {
  let component: SisppiRolesChangePermissionsBoxComponent;
  let fixture: ComponentFixture<SisppiRolesChangePermissionsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SisppiRolesChangePermissionsBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisppiRolesChangePermissionsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
