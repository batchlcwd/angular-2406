import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  standalone: false,
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css',
})
export class DashboardHomeComponent {
  fields = [
    {
      name: 'Username',
      type: 'text',
      placeholder: 'Enter your username',
      required: true,
      value: '',
      label: 'Username',
    },
    {
      name: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      required: true,
      value: '',
      label: 'Email',
    },
    {
      name: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
      required: true,
      value: '',
      label: 'Password',
    },
    {
      name: 'Age',
      type: 'number',
      placeholder: 'Enter your age',
      required: false,
      value: '',
      label: 'Age',
    },
    {
      name: 'country',
      type: 'dropdown',
      options: ['India', 'USA', 'UK', 'Australia'],
      placeholder: 'Select your country',
      required: true,
      value: '',
      label: 'Country',
    },
  ];

  handleFormSubmit(event: any) {
    console.log('Form submitted:', event);
  }

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
