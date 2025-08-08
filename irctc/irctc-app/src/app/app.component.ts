import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { Store } from '@ngrx/store';
import { selectIsLogin, selectToken, selectUser } from './store/auth.selector';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isLogin$: Observable<boolean>;
  user$: Observable<User | null>;
  token$: Observable<string | null>;

  constructor(public loaderService: LoaderService, private store: Store) {
    // Initialize the loader service if needed

    this.isLogin$ = this.store.select(selectIsLogin);
    this.user$ = this.store.select(selectUser);
    this.token$ = this.store.select(selectToken);
  }
  ngOnInit(): void {
    const currentTheme = localStorage.getItem('theme') || 'dark';

    if (currentTheme == 'dark') {
      document.documentElement.classList.add('app-dark');
    }
  }

  title = 'irctc-app';
}
