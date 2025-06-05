import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisppiRolesCreateRoleBoxComponent } from './sisppi-roles-create-role-box.component';

describe('SisppiRolesCreateRoleBoxComponent', () => {
  let component: SisppiRolesCreateRoleBoxComponent;
  let fixture: ComponentFixture<SisppiRolesCreateRoleBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SisppiRolesCreateRoleBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisppiRolesCreateRoleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
