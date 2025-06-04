import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesadmUsersCreateUserBoxComponent } from './sesadm-users-create-user-box.component';

describe('SesadmUsersCreateUserBoxComponent', () => {
  let component: SesadmUsersCreateUserBoxComponent;
  let fixture: ComponentFixture<SesadmUsersCreateUserBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesadmUsersCreateUserBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesadmUsersCreateUserBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
