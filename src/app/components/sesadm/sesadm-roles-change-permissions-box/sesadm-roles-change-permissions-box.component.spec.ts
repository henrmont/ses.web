import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesadmRolesChangePermissionsBoxComponent } from './sesadm-roles-change-permissions-box.component';

describe('SesadmRolesChangePermissionsBoxComponent', () => {
  let component: SesadmRolesChangePermissionsBoxComponent;
  let fixture: ComponentFixture<SesadmRolesChangePermissionsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesadmRolesChangePermissionsBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesadmRolesChangePermissionsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
