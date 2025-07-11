import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  standalone: false,
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

  @Output() sidebarToggle = new EventEmitter<void>();

}
