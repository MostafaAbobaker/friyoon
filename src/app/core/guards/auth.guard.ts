import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  const localStorageService = inject(LocalStorageService);
  const token = localStorageService.getItem<string>('token');
  if(token) {
    return true;
  } else {
    router.navigate(['/login']);
    return false
  }
};
