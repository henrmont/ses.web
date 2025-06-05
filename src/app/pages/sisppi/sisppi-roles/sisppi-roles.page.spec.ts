import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisppiRolesPage } from './sisppi-roles.page';

describe('SisppiRolesPage', () => {
  let component: SisppiRolesPage;
  let fixture: ComponentFixture<SisppiRolesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SisppiRolesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisppiRolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
