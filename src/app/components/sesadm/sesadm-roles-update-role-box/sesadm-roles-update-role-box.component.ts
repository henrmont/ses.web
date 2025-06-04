import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SesadmService } from '../../../services/sesadm.service';

@Component({
  selector: 'app-sesadm-roles-update-role-box',
  imports: [MatToolbarModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sesadm-roles-update-role-box.component.html',
  styleUrl: './sesadm-roles-update-role-box.component.scss'
})
export class SesadmRolesUpdateRoleBoxComponent implements OnInit {

  private snackBar = inject(MatSnackBar);
  data = inject(MAT_DIALOG_DATA);

  updateForm: FormGroup = this.formBuilder.group({
    id: [null, [Validators.required]],
    name: [null, [Validators.required]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private sesadmService: SesadmService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.updateForm.patchValue({
      id: this.data.role.id,
      name: this.data.role.name.split('/')[1],
    })
  }

  onUpdateSubmit(): any {
    this.updateForm.patchValue({
      name: 'sesadm/'+this.updateForm.get('name')?.value,
    })
    this.sesadmService.updateRole('sesadm', this.updateForm.value).subscribe({
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
