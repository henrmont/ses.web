import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesadmUsersPage } from './sesadm-users.page';

describe('SesadmUsersComponent', () => {
  let component: SesadmUsersPage;
  let fixture: ComponentFixture<SesadmUsersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesadmUsersPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesadmUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
