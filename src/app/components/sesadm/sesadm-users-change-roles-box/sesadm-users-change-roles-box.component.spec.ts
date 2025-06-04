import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesadmUsersChangeRolesBoxComponent } from './sesadm-users-change-roles-box.component';

describe('SesadmUsersChangeRolesBoxComponent', () => {
  let component: SesadmUsersChangeRolesBoxComponent;
  let fixture: ComponentFixture<SesadmUsersChangeRolesBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesadmUsersChangeRolesBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesadmUsersChangeRolesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
