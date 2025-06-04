import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistfdUsersUpdateUserBoxComponent } from './sistfd-users-update-user-box.component';

describe('SistfdUsersUpdateUserBoxComponent', () => {
  let component: SistfdUsersUpdateUserBoxComponent;
  let fixture: ComponentFixture<SistfdUsersUpdateUserBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistfdUsersUpdateUserBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistfdUsersUpdateUserBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
