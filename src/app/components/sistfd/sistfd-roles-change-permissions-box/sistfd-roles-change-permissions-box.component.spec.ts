import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistfdRolesChangePermissionsBoxComponent } from './sistfd-roles-change-permissions-box.component';

describe('SistfdRolesChangePermissionsBoxComponent', () => {
  let component: SistfdRolesChangePermissionsBoxComponent;
  let fixture: ComponentFixture<SistfdRolesChangePermissionsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistfdRolesChangePermissionsBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistfdRolesChangePermissionsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
