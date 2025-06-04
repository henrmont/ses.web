import { Component, inject } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-auth-login-login-box',
  imports: [MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './auth-login-login-box.component.html',
  styleUrl: './auth-login-login-box.component.scss'
})
export class AuthLoginLoginBoxComponent {

  private snackBar = inject(MatSnackBar);

  authForm: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit() {
  }

  onSubmit(): any {
    this.authService.login(this.authForm.value).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.access_token)
      },
      error: (error) => {
        this.snackBar.open(error.error.message, 'Fechar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
      complete: () => {
        this.router.navigate(['/main'])
      }
    })
  }

}
