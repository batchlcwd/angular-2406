import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { BookTicketComponent } from '../pages/book-ticket/book-ticket.component';
import { TicketHistoryComponent } from '../pages/ticket-history/ticket-history.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent, NavbarComponent, DashboardComponent, BookTicketComponent, TicketHistoryComponent, ProfileComponent],
  imports: [CommonModule, UserRoutingModule,FormsModule],
})
export class UserModule {}
