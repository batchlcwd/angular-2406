import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { Store } from '@ngrx/store';
import {
  selectIsLogin,
  selectRefreshToken,
  selectToken,
  selectUser,
} from './store/auth.selector';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(
    public loaderService: LoaderService,
    private store: Store,
    private auth: AuthService
  ) {
    // Initialize the loader service if needed
    // this.store.select(selectIsLogin).subscribe((isLogin) => {
    //   console.log('app component is login: ', isLogin);
    //   this.auth.
    // });
    this.store.select(selectToken).subscribe((token) => {
      console.log('App Token ', token);
      this.auth.login(token!);
    });

    this.store.select(selectRefreshToken).subscribe((refreshToken) => {
      console.log('App Refresh Token ', refreshToken);
      this.auth.saveRefreshToken(refreshToken!);
    });
  }
  ngOnInit(): void {
    const currentTheme = localStorage.getItem('theme') || 'dark';

    if (currentTheme == 'dark') {
      document.documentElement.classList.add('app-dark');
    }
  }

  title = 'irctc-app';
}
