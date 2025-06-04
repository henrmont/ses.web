import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistfdUsersCreateUserBoxComponent } from './sistfd-users-create-user-box.component';

describe('SistfdUsersCreateUserBoxComponent', () => {
  let component: SistfdUsersCreateUserBoxComponent;
  let fixture: ComponentFixture<SistfdUsersCreateUserBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistfdUsersCreateUserBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistfdUsersCreateUserBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
