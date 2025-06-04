import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashboardPage } from './main-dashboard.page';

describe('MainDashboardComponent', () => {
  let component: MainDashboardPage;
  let fixture: ComponentFixture<MainDashboardPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainDashboardPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
