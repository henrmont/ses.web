import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesadmProceduresPage } from './sesadm-procedures.page';

describe('SesadmProceduresComponent', () => {
  let component: SesadmProceduresPage;
  let fixture: ComponentFixture<SesadmProceduresPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesadmProceduresPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesadmProceduresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
