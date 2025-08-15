import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { catchError, Observable, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectRefreshToken } from '../store/auth.selector';
import {
  loginSuccessAction,
  logoutAction,
  refreshTokenAction,
} from '../store/auth.actions';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  refreshTokenValue: string | null = null;

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private store: Store
  ) {
    this.store.select(selectRefreshToken).subscribe((refreshToken) => {
      this.refreshTokenValue = refreshToken;
    });
  }

  //token generate
  //login
  getToken(username: string, password: string) {
    return this._http.post(`${environment.apiUrl}/auth/login`, {
      username,
      password,
    });
  }
  // refresh api to refresh the access

  refreshToken(): Observable<any> {
    return this._http
      .post(`${environment.apiUrl}/auth/refresh-token`, this.refreshTokenValue)
      .pipe(
        tap((response: any) => {
          console.log('Refresh token response: ', response);
          // token, refreshToken-- update state
          this.store.dispatch(
            refreshTokenAction({
              refreshToken: response.refreshToken,
              token: response.token,
            })
          );
        }),
        catchError((error) => {
          this.store.dispatch(
            logoutAction({
              isLogin: false,
            })
          );
          console.error('Error refreshing token:', error);
          this._router.navigate(['/login']);
          return throwError(() => error);
        })
      );
  }
}
