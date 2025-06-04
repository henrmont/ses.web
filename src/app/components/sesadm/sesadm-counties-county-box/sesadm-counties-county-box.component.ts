import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-sesadm-counties-county-box',
  imports: [MatToolbarModule, MatDialogModule, MatIconModule, MatButtonModule, MatListModule, CommonModule],
  templateUrl: './sesadm-counties-county-box.component.html',
  styleUrl: './sesadm-counties-county-box.component.scss'
})
export class SesadmCountiesCountyBoxComponent {

  data = inject(MAT_DIALOG_DATA);

}
