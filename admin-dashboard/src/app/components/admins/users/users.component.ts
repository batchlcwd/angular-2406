import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users = [
    {
      userId: 1,
      name: 'Ravi Kumar',
      email: 'ravi.kumar@example.com',
      role: 'Admin',
      status: 'Active'
    },
    {
      userId: 2,
      name: 'Asha Mehta',
      email: 'asha.mehta@example.com',
      role: 'User',
      status: 'Inactive'
    },
    {
      userId: 3,
      name: 'Jatin Arora',
      email: 'jatin.arora@example.com',
      role: 'Manager',
      status: 'Active'
    }
  ];

}
