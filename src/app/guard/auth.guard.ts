
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let islogin = localStorage.getItem('userData')
  if (islogin) {
    return true;
  } else {
    return false;
  }

};
