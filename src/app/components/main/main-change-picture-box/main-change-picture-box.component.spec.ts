import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChangePictureBoxComponent } from './main-change-picture-box.component';

describe('MainChangePictureBoxComponent', () => {
  let component: MainChangePictureBoxComponent;
  let fixture: ComponentFixture<MainChangePictureBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainChangePictureBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainChangePictureBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
