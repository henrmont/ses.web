import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistfdUsersDeleteUserBoxComponent } from './sistfd-users-delete-user-box.component';

describe('SistfdUsersDeleteUserBoxComponent', () => {
  let component: SistfdUsersDeleteUserBoxComponent;
  let fixture: ComponentFixture<SistfdUsersDeleteUserBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistfdUsersDeleteUserBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistfdUsersDeleteUserBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
