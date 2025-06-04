import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../services/auth.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-auth-reset-reset-box',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './auth-reset-reset-box.component.html',
  styleUrl: './auth-reset-reset-box.component.scss'
})
export class AuthResetResetBoxComponent {

  private snackBar = inject(MatSnackBar);

  resetForm: FormGroup = this.formBuilder.group({
    id: [this.route.snapshot.params['id'], [Validators.required]],
    npassword: [null, [Validators.required]],
    cpassword: [null, [Validators.required]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  onSubmit(): any {
    this.authService.resetPassword(this.resetForm.value).subscribe({
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
        this.router.navigate(['/auth']);
      }
    })
  }

}
