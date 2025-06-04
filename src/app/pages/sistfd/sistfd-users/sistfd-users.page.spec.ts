import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistfdUsersPage } from './sistfd-users.page';

describe('SistfdUsersComponent', () => {
  let component: SistfdUsersPage;
  let fixture: ComponentFixture<SistfdUsersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistfdUsersPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistfdUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
