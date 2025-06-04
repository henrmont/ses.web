import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesadmIndexPage } from './sesadm-index.page';

describe('SesadmIndexComponent', () => {
  let component: SesadmIndexPage;
  let fixture: ComponentFixture<SesadmIndexPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesadmIndexPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesadmIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
