import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistfdRolesCreateRoleBoxComponent } from './sistfd-roles-create-role-box.component';

describe('SistfdRolesCreateRoleBoxComponent', () => {
  let component: SistfdRolesCreateRoleBoxComponent;
  let fixture: ComponentFixture<SistfdRolesCreateRoleBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistfdRolesCreateRoleBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistfdRolesCreateRoleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
