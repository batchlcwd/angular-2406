import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as CryptoJS from 'crypto-js';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient, private _router: Router) {}

  private secretKey = 'hoasdhalfahupatfabnvabgsdfasgasgbkjgagghoasdfgh';

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
      .post(`${environment.apiUrl}/auth/refresh-token`, this.getRefreshToken())
      .pipe(
        tap((response: any) => {
          console.log('Refresh token response: ', response);
          // token, refreshToken
          this.login(response.token);
          if (response.refreshToken) {
            this.saveRefreshToken(response.refreshToken);
          }
        }),
        catchError((error) => {
          this.logout();
          console.error('Error refreshing token:', error);
          this._router.navigate(['/login']);

          return throwError(() => error);
        })
      );
  }

  // local storage for token management

  // save refresh token
  saveRefreshToken(refreshToken: string) {
    if (refreshToken == null) {
      localStorage.removeItem('refreshToken');
      return;
    }
    const encToken = CryptoJS.AES.encrypt(refreshToken, this.secretKey);
    localStorage.setItem('refreshToken', encToken.toString());
  }

  // get refresh token
  getRefreshToken() {
    const encToken = localStorage.getItem('refreshToken');
    if (!encToken) {
      return null;
    }
    try {
      const token = CryptoJS.AES.decrypt(encToken, this.secretKey);
      return token.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      console.log('error in decrypting refresh token');
      return null;
    }
  }

  // token store:

  login(token: string) {
    if (token == null) {
      localStorage.removeItem('token');
      return;
    }
    const encToken = CryptoJS.AES.encrypt(token, this.secretKey);
    localStorage.setItem('token', encToken.toString());
  }

  getLocalToken() {
    const encToken = localStorage.getItem('token');
    if (!encToken) {
      return null;
    }

    try {
      const token = CryptoJS.AES.decrypt(encToken, this.secretKey);
      return token.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      console.log('error in decrypting token');
      return null;
    }
  }

  isLogin() {
    return this.getLocalToken() != null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  }
}
