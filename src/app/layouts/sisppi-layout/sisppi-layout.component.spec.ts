import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisppiLayoutComponent } from './sisppi-layout.component';

describe('SisppiLayoutComponent', () => {
  let component: SisppiLayoutComponent;
  let fixture: ComponentFixture<SisppiLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SisppiLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisppiLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
