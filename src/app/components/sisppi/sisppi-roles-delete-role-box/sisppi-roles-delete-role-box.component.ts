import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SesadmService } from '../../../services/sesadm.service';

const sisppiRolesChannel = new BroadcastChannel('sisppi-roles-channel');

@Component({
  selector: 'app-sisppi-roles-delete-role-box',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './sisppi-roles-delete-role-box.component.html',
  styleUrl: './sisppi-roles-delete-role-box.component.scss'
})
export class SisppiRolesDeleteRoleBoxComponent {

  data = inject(MAT_DIALOG_DATA);
  private snackBar = inject(MatSnackBar);

  constructor(
    private sesadmService: SesadmService,
    private dialog: MatDialog
  ) {}

  deleteRole() {
    this.sesadmService.deleteRole('sisppi', this.data.role.id).subscribe({
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
        sisppiRolesChannel.postMessage('update')
        this.dialog.closeAll()
      }
    })
  }

}
