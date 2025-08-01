import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastMessageService } from '../../services/toast-message.service';
import { Router } from '@angular/router';

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
    private _router: Router
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
        this._toast.success('Login Successfully ');
        this._auth.login(response.token);
        this._auth.saveRefreshToken(response.refreshToken);
        this._router.navigate(['/admin/home']);
      });
  }
}
