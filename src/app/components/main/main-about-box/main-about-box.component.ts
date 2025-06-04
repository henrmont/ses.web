import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-main-about-box',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './main-about-box.component.html',
  styleUrl: './main-about-box.component.scss'
})
export class MainAboutBoxComponent {

}
