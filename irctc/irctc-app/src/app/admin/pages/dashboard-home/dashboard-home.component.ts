import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  standalone: false,
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent {
adminName = 'Admin'; // Replace with dynamic user from login session

  trainSummary = {
    totalTrains: 120,
    activeTrains: 95,
    bookingsToday: 450,
    pendingRequests: 12,
  };

  recentActivities = [
    {
      id: 'TR123',
      name: 'Rajdhani Express',
      status: 'On Time',
      lastUpdated: '10 mins ago',
    },
    {
      id: 'TR456',
      name: 'Shatabdi Express',
      status: 'Delayed',
      lastUpdated: '30 mins ago',
    },
    {
      id: 'TR789',
      name: 'Duronto Express',
      status: 'Cancelled',
      lastUpdated: '1 hour ago',
    },
  ];
}
