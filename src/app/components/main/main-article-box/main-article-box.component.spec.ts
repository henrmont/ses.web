import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainArticleBoxComponent } from './main-article-box.component';

describe('MainArticleBoxComponent', () => {
  let component: MainArticleBoxComponent;
  let fixture: ComponentFixture<MainArticleBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainArticleBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainArticleBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
