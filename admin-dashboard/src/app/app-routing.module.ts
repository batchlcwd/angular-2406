import { inject, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './components/admins/dashboard-home/dashboard-home.component';
import { ProductsComponent } from './components/admins/products/products.component';
import { OrdersComponent } from './components/admins/orders/orders.component';
import { UsersComponent } from './components/admins/users/users.component';
import { SettingsComponent } from './components/admins/settings/settings.component';
import { UserComponent } from './components/admins/user/user.component';
import { UserDashboardComponent } from './components/admins/user-dashboard/user-dashboard.component';
import { AddUserComponent } from './components/admins/add-user/add-user.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthChild } from './guards/authchild.guard';
import { UserFormGuard } from './guards/user-form.gaurd';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: DashboardHomeComponent,
    canActivate: [
      () => {
        const authService = inject(AuthService);
        const router = inject(Router);
        console.log('home guard');
      },
    ],
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    component: UserDashboardComponent,
    canActivateChild: [AuthChild],
    children: [
      {
        path: '',
        component: UsersComponent,
      },
      {
        path: 'add',
        component: AddUserComponent,
        canDeactivate: [UserFormGuard],
      },
      {
        path: ':userId',
        component: UserComponent,
      },
    ],
  },
  // {
  //   path: 'users/:userId',
  //   component: UserComponent
  // },
  {
    path: 'settings',
    canActivate: [AuthGuard],
    component: SettingsComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
