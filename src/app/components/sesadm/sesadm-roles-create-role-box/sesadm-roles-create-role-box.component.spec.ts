import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesadmRolesCreateRoleBoxComponent } from './sesadm-roles-create-role-box.component';

describe('SesadmRolesCreateRoleBoxComponent', () => {
  let component: SesadmRolesCreateRoleBoxComponent;
  let fixture: ComponentFixture<SesadmRolesCreateRoleBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesadmRolesCreateRoleBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesadmRolesCreateRoleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
