import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SesadmService } from '../../../services/sesadm.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-sesadm-users-create-user',
  imports: [MatToolbarModule, MatIconModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sesadm-users-create-user-box.component.html',
  styleUrl: './sesadm-users-create-user-box.component.scss'
})
export class SesadmUsersCreateUserBoxComponent {

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
    this.sesadmService.create(this.createForm.value).subscribe({
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
        this.dialog.closeAll()
      }
    })
  }

}
