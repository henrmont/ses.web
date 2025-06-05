import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisppiRolesDeleteRoleBoxComponent } from './sisppi-roles-delete-role-box.component';

describe('SisppiRolesDeleteRoleBoxComponent', () => {
  let component: SisppiRolesDeleteRoleBoxComponent;
  let fixture: ComponentFixture<SisppiRolesDeleteRoleBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SisppiRolesDeleteRoleBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisppiRolesDeleteRoleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
