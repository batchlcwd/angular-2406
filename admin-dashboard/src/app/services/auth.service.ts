import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInStatus = true;
  login() {
    this.isLoggedInStatus = true;
  }

  logout() {
    this.isLoggedInStatus = false;
  }

  isLoggedIn(): boolean {
    return this.isLoggedInStatus;
  }
}
