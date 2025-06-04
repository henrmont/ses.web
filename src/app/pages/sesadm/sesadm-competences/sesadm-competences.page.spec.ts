import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesadmCompetencesPage } from './sesadm-competences.page';

describe('SesadmCompetencesComponent', () => {
  let component: SesadmCompetencesPage;
  let fixture: ComponentFixture<SesadmCompetencesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesadmCompetencesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesadmCompetencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
