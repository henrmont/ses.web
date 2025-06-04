import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-sesadm-procedures-procedure-box',
  imports: [MatToolbarModule, MatDialogModule, MatIconModule, MatButtonModule],
  templateUrl: './sesadm-procedures-procedure-box.component.html',
  styleUrl: './sesadm-procedures-procedure-box.component.scss'
})
export class SesadmProceduresProcedureBoxComponent {

}
