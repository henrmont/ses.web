import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainModuleChangeBoxComponent } from './main-module-change-box.component';

describe('MainModuleChangeBoxComponent', () => {
  let component: MainModuleChangeBoxComponent;
  let fixture: ComponentFixture<MainModuleChangeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainModuleChangeBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainModuleChangeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
