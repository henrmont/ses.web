import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesadmUsersDeleteUserBoxComponent } from './sesadm-users-delete-user-box.component';

describe('SesadmUsersDeleteUserBoxComponent', () => {
  let component: SesadmUsersDeleteUserBoxComponent;
  let fixture: ComponentFixture<SesadmUsersDeleteUserBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesadmUsersDeleteUserBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesadmUsersDeleteUserBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
