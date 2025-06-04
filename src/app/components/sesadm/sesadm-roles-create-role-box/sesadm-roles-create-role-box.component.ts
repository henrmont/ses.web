import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SesadmService } from '../../../services/sesadm.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sesadm-roles-create-role-box',
  imports: [MatToolbarModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sesadm-roles-create-role-box.component.html',
  styleUrl: './sesadm-roles-create-role-box.component.scss'
})
export class SesadmRolesCreateRoleBoxComponent {

  private snackBar = inject(MatSnackBar);

  createForm: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private sesadmService: SesadmService,
    private dialog: MatDialog,
  ) {}

  onCreateSubmit(): any {
    this.createForm.patchValue({
      name: 'sesadm/'+this.createForm.get('name')?.value,
    })
    this.sesadmService.createRole('sesadm', this.createForm.value).subscribe({
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
