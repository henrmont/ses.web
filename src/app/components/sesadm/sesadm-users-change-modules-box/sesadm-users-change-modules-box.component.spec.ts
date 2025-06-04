import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesadmUsersChangeModulesBoxComponent } from './sesadm-users-change-modules-box.component';

describe('SesadmUsersChangeModulesBoxComponent', () => {
  let component: SesadmUsersChangeModulesBoxComponent;
  let fixture: ComponentFixture<SesadmUsersChangeModulesBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesadmUsersChangeModulesBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesadmUsersChangeModulesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
