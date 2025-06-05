import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SesadmService } from '../../../services/sesadm.service';
import { MatSnackBar } from '@angular/material/snack-bar';

const sisppiUsersChannel = new BroadcastChannel('sisppi-users-channel');

@Component({
  selector: 'app-sisppi-users-create-user-box',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sisppi-users-create-user-box.component.html',
  styleUrl: './sisppi-users-create-user-box.component.scss'
})
export class SisppiUsersCreateUserBoxComponent {

   createForm: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private sesadmService: SesadmService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  onCreateSubmit(): any {
    this.sesadmService.createModuleUser('sisppi',this.createForm.value).subscribe({
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
