import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistfdLayoutComponent } from './sistfd-layout.component';

describe('SistfdLayoutComponent', () => {
  let component: SistfdLayoutComponent;
  let fixture: ComponentFixture<SistfdLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistfdLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistfdLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
