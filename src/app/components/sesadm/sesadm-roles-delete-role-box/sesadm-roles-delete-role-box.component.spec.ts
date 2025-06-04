import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesadmRolesDeleteRoleBoxComponent } from './sesadm-roles-delete-role-box.component';

describe('SesadmRolesDeleteRoleBoxComponent', () => {
  let component: SesadmRolesDeleteRoleBoxComponent;
  let fixture: ComponentFixture<SesadmRolesDeleteRoleBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesadmRolesDeleteRoleBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesadmRolesDeleteRoleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
