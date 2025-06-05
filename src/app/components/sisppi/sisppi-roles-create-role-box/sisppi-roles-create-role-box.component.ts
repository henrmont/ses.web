import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SesadmService } from '../../../services/sesadm.service';

const sisppiRolesChannel = new BroadcastChannel('sisppi-roles-channel');

@Component({
  selector: 'app-sisppi-roles-create-role-box',
  imports: [MatToolbarModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sisppi-roles-create-role-box.component.html',
  styleUrl: './sisppi-roles-create-role-box.component.scss'
})
export class SisppiRolesCreateRoleBoxComponent {

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
      name: 'sisppi/'+this.createForm.get('name')?.value,
    })
    this.sesadmService.createRole('sisppi', this.createForm.value).subscribe({
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
