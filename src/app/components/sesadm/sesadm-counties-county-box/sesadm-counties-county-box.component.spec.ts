import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesadmCountiesCountyBoxComponent } from './sesadm-counties-county-box.component';

describe('SesadmCountiesCountyBoxComponent', () => {
  let component: SesadmCountiesCountyBoxComponent;
  let fixture: ComponentFixture<SesadmCountiesCountyBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SesadmCountiesCountyBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesadmCountiesCountyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
