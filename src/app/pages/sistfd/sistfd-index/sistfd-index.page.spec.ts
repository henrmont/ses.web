import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistfdIndexPage } from './sistfd-index.page';

describe('SistfdIndexComponent', () => {
  let component: SistfdIndexPage;
  let fixture: ComponentFixture<SistfdIndexPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistfdIndexPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistfdIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
