import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-button',
  standalone: false,
  templateUrl: './user-button.component.html',
  styleUrl: './user-button.component.css',
})
export class UserButtonComponent {
  constructor(private userService: UserService) {
    this.userService.getUser();
  }
}
