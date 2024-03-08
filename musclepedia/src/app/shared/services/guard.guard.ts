import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const guardGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  let res: boolean = false;
  authService.authStateListener();
  authService.currentAuthStatus.subscribe(status => status !== null ? res = true : res = false);

  if (res == false) {
    return router.navigateByUrl('login');
  }
  return res;
};
