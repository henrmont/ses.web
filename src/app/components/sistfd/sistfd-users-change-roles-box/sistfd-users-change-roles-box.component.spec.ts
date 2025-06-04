import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistfdUsersChangeRolesBoxComponent } from './sistfd-users-change-roles-box.component';

describe('SistfdUsersChangeRolesBoxComponent', () => {
  let component: SistfdUsersChangeRolesBoxComponent;
  let fixture: ComponentFixture<SistfdUsersChangeRolesBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistfdUsersChangeRolesBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistfdUsersChangeRolesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
