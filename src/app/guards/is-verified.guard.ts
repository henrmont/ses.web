import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

export const isVerifiedGuard: CanActivateFn = (route, state) => {
  const user = inject(AuthService).getUser(route.params['id']);
  const router = inject(Router);
  return new Observable<boolean>(obs => {
    user.subscribe({
      next: (response) => {
        if (response.verification_code) {
          obs.next(true);
        } else {
          obs.next(false);
          router.navigate(['/auth'])
        }
      },
      error: () => {
        obs.next(false);
        router.navigate(['/auth'])
      }
    })
  });
};
