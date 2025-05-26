import { Component } from '@angular/core';
import { UserService } from '../../../user/services/user.service';

@Component({
  selector: 'app-player',
  standalone: false,
  templateUrl: './player.component.html',
  styleUrl: './player.component.css',
})
export class PlayerComponent {
  constructor(private userService: UserService) {
    this.userService.getUser();
  }
}
