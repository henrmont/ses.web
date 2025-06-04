import { Component, inject, OnInit } from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {MaskitoOptions} from '@maskito/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth-verification-verification-box',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MaskitoDirective, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './auth-verification-verification-box.component.html',
  styleUrl: './auth-verification-verification-box.component.scss'
})
export class AuthVerificationVerificationBoxComponent {

  private snackBar = inject(MatSnackBar);

  readonly maskitoOptions: MaskitoOptions = {
    mask: /^\d{1}$/,
  };

  verificationForm: FormGroup = this.formBuilder.group({
    id: [this.route.snapshot.params['id'], [Validators.required]],
    one: ['', [Validators.required, Validators.maxLength(1), Validators.minLength(1)]],
    two: ['', [Validators.required, Validators.maxLength(1), Validators.minLength(1)]],
    three: ['', [Validators.required, Validators.maxLength(1), Validators.minLength(1)]],
    four: ['', [Validators.required, Validators.maxLength(1), Validators.minLength(1)]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onSubmit(): any {
    this.authService.checkVerificationCode(this.verificationForm.value).subscribe({
      error: (error) => {
        this.snackBar.open(error.error.message, 'Fechar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
      complete: () => {
        this.router.navigate(['auth/reset', this.route.snapshot.params['id']]);
      }
    })
  }

  resendVerificationCode() {
    this.authService.sendVerificationCode(this.verificationForm.value).subscribe({
      next: (response) => {
        this.snackBar.open('Código de verificação reenviado.', 'Fechar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
    })
  }

}
