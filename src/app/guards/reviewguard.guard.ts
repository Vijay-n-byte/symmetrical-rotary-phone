import { CanActivateFn } from '@angular/router';

export const reviewguardGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("review")==='1' && localStorage.getItem("name")!=="" && localStorage.getItem("test")==="0"){
    return true;
  }
  return false;
};
