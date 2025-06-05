import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisppiRolesUpdateRoleBoxComponent } from './sisppi-roles-update-role-box.component';

describe('SisppiRolesUpdateRoleBoxComponent', () => {
  let component: SisppiRolesUpdateRoleBoxComponent;
  let fixture: ComponentFixture<SisppiRolesUpdateRoleBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SisppiRolesUpdateRoleBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisppiRolesUpdateRoleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
