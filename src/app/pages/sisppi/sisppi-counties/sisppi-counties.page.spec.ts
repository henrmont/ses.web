import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisppiCountiesPage } from './sisppi-counties.page';

describe('SisppiCountiesPage', () => {
  let component: SisppiCountiesPage;
  let fixture: ComponentFixture<SisppiCountiesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SisppiCountiesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisppiCountiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
