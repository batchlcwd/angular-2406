import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { AdminSidebarServiceService } from '../../services/admin-sidebar-service.service';
import { AuthService } from '../../services/auth.service';
import { ToastMessageService } from '../../services/toast-message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  standalone: false,
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css',
})
export class SidemenuComponent implements OnInit {
  items: MenuItem[] = [];
  items1: MenuItem[] = [];
  constructor(
    public adminSidebarService: AdminSidebarServiceService,
    private _auth: AuthService,
    private _toast: ToastMessageService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    const currentUrl = this._router.url;

    this.items1 = [
      {
        label: 'Settings',
        icon: PrimeIcons.COG,
        routerLink: '/settings',
        expanded: true,
        items: [
          {
            label: 'Theme',
            icon: PrimeIcons.SUN,
            command: (event) => {
              this.toogleTheme(event);
            },
            routerLink: '#',
          },

          {
            label: 'Profile',
            icon: PrimeIcons.USER,
            routerLink: '/profile',
          },

          {
            label: 'Logout',
            icon: PrimeIcons.SIGN_OUT,
            command: () => {
              this.handleLogout();
            },
            routerLink: '#',
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
            routerLinkActiveOptions: { exact: true },
            styleClass: currentUrl === '/admin/home' ? 'active-link' : '',
          },
          {
            label: 'Trains',
            icon: PrimeIcons.MEGAPHONE,
            routerLink: '/admin/trains',
          },
          {
            label: 'Stations',
            icon: PrimeIcons.SHOP,
            routerLink: '/admin/stations',
          },
          {
            label: 'Routes',
            icon: PrimeIcons.MAP,
            routerLink: '/admin/routes',
          },
          {
            label: 'Schedules',
            icon: PrimeIcons.CLOCK,
            routerLink: '/admin/schedules',
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
  handleLogout() {
    this._auth.logout();
    this._toast.success('Logged out');
    this._router.navigate(['/login']);
  }

  toogleTheme(event: any) {
    const item = event.item;

    const html = document.documentElement;
    const isDark = html.classList.toggle('app-dark');

    item.icon = isDark ? PrimeIcons.SUN : PrimeIcons.MOON;
    item.label = isDark ? 'Light' : 'Dark';

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
}
