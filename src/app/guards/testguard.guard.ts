import { CanActivateFn } from '@angular/router';

export const testguardGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("name")!=="" && localStorage.getItem("email")!=="" && localStorage.getItem("test")==='1'){
    return true;
  }
  return false;
};
