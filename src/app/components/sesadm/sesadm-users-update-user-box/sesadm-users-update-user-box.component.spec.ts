import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesadmUsersUpdateUserBoxComponent } from './sesadm-users-update-user-box.component';

describe('SesadmUsersUpdateUserBoxComponent', () => {
  let component: SesadmUsersUpdateUserBoxComponent;
  let fixture: ComponentFixture<SesadmUsersUpdateUserBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesadmUsersUpdateUserBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesadmUsersUpdateUserBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
