import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomeArticleComponent } from './main-home-article.component';

describe('MainHomeArticleComponent', () => {
  let component: MainHomeArticleComponent;
  let fixture: ComponentFixture<MainHomeArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainHomeArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHomeArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
