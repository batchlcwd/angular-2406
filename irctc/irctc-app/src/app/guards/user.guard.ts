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
import { selectIsLogin, selectUser } from '../store/auth.selector';
import { map, Observable, Subject, take } from 'rxjs';
import { combineLatest } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
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

    return combineLatest([
      this.store.select(selectIsLogin),
      this.store.select(selectUser),
    ]).pipe(
      take(1),
      map(([isLogin, user]) => {
        return isLogin && user?.roles[0].name == 'ROLE_NORMAL'
          ? true
          : this._router.createUrlTree(['/login']);
      })
    );
  }
}
