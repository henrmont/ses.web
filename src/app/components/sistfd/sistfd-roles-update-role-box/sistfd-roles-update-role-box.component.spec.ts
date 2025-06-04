import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistfdRolesUpdateRoleBoxComponent } from './sistfd-roles-update-role-box.component';

describe('SistfdRolesUpdateRoleBoxComponent', () => {
  let component: SistfdRolesUpdateRoleBoxComponent;
  let fixture: ComponentFixture<SistfdRolesUpdateRoleBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistfdRolesUpdateRoleBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistfdRolesUpdateRoleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
