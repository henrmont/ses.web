import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAboutBoxComponent } from './main-about-box.component';

describe('MainAboutBoxComponent', () => {
  let component: MainAboutBoxComponent;
  let fixture: ComponentFixture<MainAboutBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainAboutBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAboutBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
