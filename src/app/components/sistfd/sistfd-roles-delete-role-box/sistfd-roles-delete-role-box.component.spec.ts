import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistfdRolesDeleteRoleBoxComponent } from './sistfd-roles-delete-role-box.component';

describe('SistfdRolesDeleteRoleBoxComponent', () => {
  let component: SistfdRolesDeleteRoleBoxComponent;
  let fixture: ComponentFixture<SistfdRolesDeleteRoleBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistfdRolesDeleteRoleBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistfdRolesDeleteRoleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
