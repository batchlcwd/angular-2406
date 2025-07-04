import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminSidebarServiceService {
  visiable = signal<boolean>(false);
  constructor() {}

  toggleSidebar() {
    this.visiable.set(!this.visiable());
  }
}
