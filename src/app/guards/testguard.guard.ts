import { inject } from '@angular/core';
import { CanActivateFn,UrlTree,Router} from '@angular/router';

export const testguardGuard: CanActivateFn = (route, state):Promise<UrlTree|boolean>|boolean => {
  const router:Router=inject(Router);
  if(localStorage.getItem("name")!=="" && localStorage.getItem("email")!=="" && localStorage.getItem("test")==='1'){
    return true;
  }
  return router.navigate(['home']);
};