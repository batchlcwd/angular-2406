import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastMessageService } from '../../services/toast-message.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../store/auth.actions';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private _auth: AuthService,
    private _toast: ToastMessageService,
    private _router: Router,
    private store: Store
  ) {}

  onLogin() {
    console.log('Logging in with:', this.username, this.password);
    // Add your login logic here
    if (this.username.trim() == '' || this.password.trim() === '') {
      this._toast.error('Enter the username || password !!');
      return;
    }

    //login token generate

    this._auth
      .getToken(this.username, this.password)
      .subscribe((response: any) => {
        console.log(response);
        console.log('Login successful:', response);
        this.store.dispatch(
          AuthActions.loginSuccessAction({
            user: response.user,
            isLogin: true,
            token: response.token,
            refreshToken: response.refreshToken,
            loading: false,
          })
        );
        this._toast.success('Login Successfully ');
        //local storage

        this._router.navigate(['/admin/home']);
      });
  }
}
