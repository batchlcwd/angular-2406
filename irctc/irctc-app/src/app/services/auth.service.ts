import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  private secretKey = 'hoasdhalfahupatfabnvabgsdfasgasgbkjgagghoasdfgh';

  //token generate
  getToken(username: string, password: string) {
    return this._http.post(`${environment.apiUrl}/auth/login`, {
      username,
      password,
    });
  }

  // token store:

  login(token: string) {
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
  }
}
