import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SesadmService } from '../../../services/sesadm.service';
import { MatSnackBar } from '@angular/material/snack-bar';

const sisppiUsersChannel = new BroadcastChannel('sisppi-users-channel');

@Component({
  selector: 'app-sisppi-users-update-user-box',
  imports: [MatToolbarModule, MatIconModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sisppi-users-update-user-box.component.html',
  styleUrl: './sisppi-users-update-user-box.component.scss'
})
export class SisppiUsersUpdateUserBoxComponent {

  data = inject(MAT_DIALOG_DATA);

  updateForm: FormGroup = this.formBuilder.group({
    id: [this.data.user.id, [Validators.required]],
    name: [this.data.user.name, [Validators.required]],
    email: [this.data.user.email, [Validators.required, Validators.email]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private sesadmService: SesadmService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {}

  onUpdateSubmit(): any {
    this.sesadmService.changeInfoUser('sisppi', this.updateForm.value).subscribe({
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
