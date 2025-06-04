import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesadmLayoutComponent } from './sesadm-layout.component';

describe('SesadmLayoutComponent', () => {
  let component: SesadmLayoutComponent;
  let fixture: ComponentFixture<SesadmLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesadmLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesadmLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
