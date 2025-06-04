import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesadmRolesPage } from './sesadm-roles.page';

describe('SesadmRolesComponent', () => {
  let component: SesadmRolesPage;
  let fixture: ComponentFixture<SesadmRolesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesadmRolesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesadmRolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
