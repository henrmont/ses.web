import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SesadmService } from '../../../services/sesadm.service';

const sisppiUsersChannel = new BroadcastChannel('sisppi-users-channel');

@Component({
  selector: 'app-sisppi-users-delete-user-box',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './sisppi-users-delete-user-box.component.html',
  styleUrl: './sisppi-users-delete-user-box.component.scss'
})
export class SisppiUsersDeleteUserBoxComponent {

  data = inject(MAT_DIALOG_DATA);
  private snackBar = inject(MatSnackBar);

  constructor(
    private sesadmService: SesadmService,
    private dialog: MatDialog
  ) {}

  deleteUser() {
    this.sesadmService.deleteUser('sisppi',this.data.user.id).subscribe({
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
        sisppiUsersChannel.postMessage('update')
        this.dialog.closeAll()
      }
    })
  }

}
