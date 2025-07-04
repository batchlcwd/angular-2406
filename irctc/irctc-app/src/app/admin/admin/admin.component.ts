import { Component } from '@angular/core';
import { AdminSidebarServiceService } from '../../services/admin-sidebar-service.service';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  constructor(public adminSidebarService: AdminSidebarServiceService) {}
}
