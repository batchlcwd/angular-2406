import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { selectIsLogin } from '../store/auth.selector';
import { map, Observable, Subject, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  authenticated = false;

  constructor(
    private _router: Router,
    private _auth: AuthService,
    private store: Store
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    console.log('Auth Guard.. executed');

    // if (this._auth.isLogin()) {
    //   return new Subject();
    // } else {
    //   this._router.navigate(['/login']);
    //   return false;
    // }

    return this.store.select(selectIsLogin).pipe(
      take(1),
      map((isLogin) =>
        isLogin ? true : this._router.createUrlTree(['/login'])
      )
    );
  }
}
