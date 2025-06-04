import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesadmProceduresProcedureBoxComponent } from './sesadm-procedures-procedure-box.component';

describe('SesadmProceduresProcedureBoxComponent', () => {
  let component: SesadmProceduresProcedureBoxComponent;
  let fixture: ComponentFixture<SesadmProceduresProcedureBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesadmProceduresProcedureBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesadmProceduresProcedureBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
