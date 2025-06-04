import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesadmRolesUpdateRoleBoxComponent } from './sesadm-roles-update-role-box.component';

describe('SesadmRolesUpdateRoleBoxComponent', () => {
  let component: SesadmRolesUpdateRoleBoxComponent;
  let fixture: ComponentFixture<SesadmRolesUpdateRoleBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesadmRolesUpdateRoleBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesadmRolesUpdateRoleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
