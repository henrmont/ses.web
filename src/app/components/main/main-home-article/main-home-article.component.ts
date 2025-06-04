import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MainArticleBoxComponent } from '../main-article-box/main-article-box.component';

@Component({
  selector: 'app-main-home-article',
  imports: [MatIconModule, MatButton, CommonModule, RouterModule],
  templateUrl: './main-home-article.component.html',
  styleUrl: './main-home-article.component.scss'
})
export class MainHomeArticleComponent {

  @Input() article: any;

  constructor(
    private dialog: MatDialog,
  ) { }

  openArticleBox() {
    this.dialog.open(MainArticleBoxComponent, {
      width: '800px',
      disableClose: true,
      autoFocus: false,
      data: {
        article: this.article
      }
    });
  }

}
