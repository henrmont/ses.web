import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../services/main.service';
import { MainHomeArticleComponent } from "../../../components/main/main-home-article/main-home-article.component";
import { MatDialog } from '@angular/material/dialog';
import { LoadingBoxComponent } from '../../../components/utilities/loading-box/loading-box.component';

@Component({
  selector: 'app-main-home',
  imports: [MainHomeArticleComponent],
  templateUrl: './main-home.page.html',
  styleUrl: './main-home.page.scss'
})
export class MainHomePage implements OnInit {

  constructor(
    private mainService: MainService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getArticles()
  }

  articles: any = null
  getArticles() {
    this.openLoadingBox()
    this.mainService.getArticles().subscribe({
      next: (response) => {
        this.articles = response
      },
      complete: () => {
        this.dialog.closeAll()
      }
    })
  }

  openLoadingBox() {
    this.dialog.open(LoadingBoxComponent, {
      width: '100px',
      height: '200px',
      disableClose: true,
      autoFocus: false,
    });
  }

}
