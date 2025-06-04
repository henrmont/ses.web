import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistfdRolesPage } from './sistfd-roles.page';

describe('SistfdRolesComponent', () => {
  let component: SistfdRolesPage;
  let fixture: ComponentFixture<SistfdRolesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistfdRolesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistfdRolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
