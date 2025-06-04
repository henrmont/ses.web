import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-auth-recover-recover-box',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './auth-recover-recover-box.component.html',
  styleUrl: './auth-recover-recover-box.component.scss'
})
export class AuthRecoverRecoverBoxComponent {

  private snackBar = inject(MatSnackBar);

  recoverForm: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit() {
  }

  id: any
  onSubmit(): any {
    this.authService.sendVerificationCode(this.recoverForm.value).subscribe({
      next: (response) => {
        this.id = response.id
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
        this.router.navigate(['auth/verification', this.id]);
      }
    })
  }

}
