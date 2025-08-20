import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { BookTicketComponent } from '../pages/book-ticket/book-ticket.component';
import { TicketHistoryComponent } from '../pages/ticket-history/ticket-history.component';
import { ProfileComponent } from '../pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'book',
        component: BookTicketComponent,
      },
      {
        path: 'history',
        component: TicketHistoryComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
