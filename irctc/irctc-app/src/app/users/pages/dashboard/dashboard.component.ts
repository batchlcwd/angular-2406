import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser } from '../../../store/auth.selector';
import { User } from '../../../models/user';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  user!: User | null;
  constructor(private store: Store) {
    this.store.select(selectUser).subscribe((user) => {
      this.user = user;
    });
  }
}
