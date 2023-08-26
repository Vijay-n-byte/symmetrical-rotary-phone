import { inject } from '@angular/core';
import { CanActivateFn ,Router, UrlTree} from '@angular/router';

export const reviewguardGuard: CanActivateFn = (route, state) :Promise<boolean|UrlTree>|boolean=> {
  const router:Router=inject(Router);
  if(localStorage.getItem("review")==='1' && localStorage.getItem("name")!=="" && localStorage.getItem("test")==="0"){
    return true;
  }
  return router.navigate(['home']);
};
