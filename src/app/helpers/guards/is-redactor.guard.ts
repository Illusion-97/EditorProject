import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class IsRedactorGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const role = this.auth.getRole() === 'REDAC'
    if(!role) this.router.navigate(['/home']).then(() => alert('Vous ne disposez pas des droits d\'accès à ce contenu'));
    return role;
  }

}
