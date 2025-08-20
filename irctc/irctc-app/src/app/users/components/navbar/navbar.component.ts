import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser } from '../../../store/auth.selector';
import { User } from '../../../models/user';
import { logoutAction } from '../../../store/auth.actions';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  user!: User | null;

  constructor(private store: Store) {
    this.store.select(selectUser).subscribe((user) => {
      this.user = user;
    });
  }

  logout() {
    this.store.dispatch(logoutAction({ isLogin: false }));
  }
}
