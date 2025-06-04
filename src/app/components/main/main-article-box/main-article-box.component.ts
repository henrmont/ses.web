import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main-article-box',
  imports: [MatDialogModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './main-article-box.component.html',
  styleUrl: './main-article-box.component.scss'
})
export class MainArticleBoxComponent {

  data = inject(MAT_DIALOG_DATA);

}
