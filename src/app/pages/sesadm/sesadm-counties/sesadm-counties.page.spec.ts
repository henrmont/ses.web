import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesadmCountiesPage } from './sesadm-counties.page';

describe('SesadmCountyComponent', () => {
  let component: SesadmCountiesPage;
  let fixture: ComponentFixture<SesadmCountiesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesadmCountiesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesadmCountiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
