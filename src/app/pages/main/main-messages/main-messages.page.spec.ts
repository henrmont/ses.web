import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMessagesPage } from './main-messages.page';

describe('MainMessagesComponent', () => {
  let component: MainMessagesPage;
  let fixture: ComponentFixture<MainMessagesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMessagesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainMessagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
