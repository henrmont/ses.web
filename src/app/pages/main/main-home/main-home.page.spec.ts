import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomePage } from './main-home.page';

describe('MainHomeComponent', () => {
  let component: MainHomePage;
  let fixture: ComponentFixture<MainHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainHomePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
