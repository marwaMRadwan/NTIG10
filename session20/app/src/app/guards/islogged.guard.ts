import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsloggedGuard implements CanActivate {
  constructor(private _router: Router){ }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean {
      if(localStorage.getItem('tasksToken')){
        // this._router.navigate([''], {queryParams:{err: 'fe error'}})
        this._router.navigateByUrl('')
        return false
      }
    return true;
  }
  
}
