import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/admins/products/products.component';
import { SettingsComponent } from './components/admins/settings/settings.component';
import { SidebarComponent } from './components/admins/sidebar/sidebar.component';
import { UsersComponent } from './components/admins/users/users.component';
import { DashboardHomeComponent } from './components/admins/dashboard-home/dashboard-home.component';
import { OrdersComponent } from './components/admins/orders/orders.component';
import { HeaderComponent } from './components/admins/header/header.component';
import { UserComponent } from './components/admins/user/user.component';
import { UserDashboardComponent } from './components/admins/user-dashboard/user-dashboard.component';
import { AddUserComponent } from './components/admins/add-user/add-user.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DashboardHomeComponent,
    OrdersComponent,
    ProductsComponent,
    SettingsComponent,
    SidebarComponent,
    UsersComponent,
    HeaderComponent,
    UserComponent,
    UserDashboardComponent,
    AddUserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
