import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  @Input() isOpen: boolean = false;
  isMobile: boolean = false;

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768; // Tailwind's `md`
  }

  sideMenus = [
    {
      title: 'Home',
      path: '/home',
      logo: '🏠',
    },
    {
      title: 'Products',
      path: '/products',
      logo: '🛒',
    },
    {
      title: 'Orders',
      path: '/orders',
      logo: '📦',
    },
    {
      title: 'Settings',
      path: '/settings',
      logo: '⚙️',
    },
    {
      title: 'Users',
      path: '/users',
      logo: '👥',
    },
    {
      title: 'Logout',
      path: '/logout',
      logo: '🚪',
      class: 'text-red-500 hover:bg-red-200',
    },
    {
      title: 'Admin',
      path: '/admin',
      logo: '🤯',
      class: 'text-red-500 hover:bg-red-200',
    },
  ];
}
