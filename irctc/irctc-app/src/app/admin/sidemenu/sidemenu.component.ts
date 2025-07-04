import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { AdminSidebarServiceService } from '../../services/admin-sidebar-service.service';

@Component({
  selector: 'app-sidemenu',
  standalone: false,
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css',
})
export class SidemenuComponent implements OnInit {
  items: MenuItem[] = [];
  items1: MenuItem[] = [];
  constructor(public adminSidebarService: AdminSidebarServiceService) {}
  ngOnInit(): void {
    this.items1 = [
      {
        label: 'Settings',
        icon: PrimeIcons.COG,
        routerLink: '/settings',
        items: [
          {
            label: 'Profile',
            icon: PrimeIcons.USER,
            routerLink: '/profile',
          },
          {
            label: 'Logout',
            icon: PrimeIcons.SIGN_OUT,
            routerLink: '/',
          },
        ],
      },
    ];

    this.items = [
      {
        expanded: true,
        tooltip: 'Manage the trains from here',
        label: 'Train Management',
        icon: PrimeIcons.BARCODE,

        items: [
          {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/admin/home'],
            routerLinkActiveOptions: {
              exact: true,
            },
          },
          {
            label: 'Trains',
            icon: PrimeIcons.MEGAPHONE,
            routerLink: '/trains',
          },
          {
            label: 'Stations',
            icon: PrimeIcons.SHOP,
            routerLink: '/trains',
          },
          {
            label: 'Routes',
            icon: PrimeIcons.MAP,
            routerLink: '/routes',
          },
          {
            label: 'Schedules',
            icon: PrimeIcons.CLOCK,
            routerLink: '/schedule',
          },
          {
            label: 'Coaches & Seats',
            icon: PrimeIcons.TABLE,
            routerLink: '/coaches-seats',
          },
          {
            label: 'Bookings',
            icon: PrimeIcons.MONEY_BILL,
            routerLink: '/bookings',
          },
          {
            label: 'Transactions',
            icon: PrimeIcons.CREDIT_CARD,
            routerLink: '/transactions',
          },
          {
            label: 'Users',
            icon: PrimeIcons.USERS,
            routerLink: '/users',
          },
        ],
      },
    ];
  }
}
