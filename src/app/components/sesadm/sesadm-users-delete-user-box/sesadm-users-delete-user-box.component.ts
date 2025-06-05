import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SesadmService } from '../../../services/sesadm.service';
import { MatSnackBar } from '@angular/material/snack-bar';

const sesadmUsersChannel = new BroadcastChannel('sesadm-users-channel');

@Component({
  selector: 'app-sesadm-users-delete-user-box',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './sesadm-users-delete-user-box.component.html',
  styleUrl: './sesadm-users-delete-user-box.component.scss'
})
export class SesadmUsersDeleteUserBoxComponent {
   data = inject(MAT_DIALOG_DATA);
   private snackBar = inject(MatSnackBar);

   constructor(
    private sesadmService: SesadmService,
    private dialog: MatDialog
   ) {}

   deleteUser() {
    this.sesadmService.deleteUser('sesadm',this.data.user.id).subscribe({
      next: (response) => {
         this.snackBar.open(response.message, 'Fechar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
      error: (error) => {
        this.snackBar.open(error.error.message, 'Fechar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
      complete: () => {
        sesadmUsersChannel.postMessage('update')
        this.dialog.closeAll()
      }
    })
   }
}
