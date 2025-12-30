import { inject } from '@angular/core/primitives/di';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
 const token: string | null = localStorage.getItem('token');
 const router = inject(Router);
 if (!token) {
  router.navigate(['/login']);
  return false;
 }
 return true;
};
