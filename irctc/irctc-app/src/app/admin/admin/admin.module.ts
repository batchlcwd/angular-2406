import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';
import { ShareUiModule } from '../../modules/share-ui/share-ui.module';
import { DashboardHomeComponent } from '../pages/dashboard-home/dashboard-home.component';
import { ListTrainsComponent } from '../pages/list-trains/list-trains.component';
import { AddTrainComponent } from '../pages/add-train/add-train.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    SidemenuComponent,
    DashboardHomeComponent,
    ListTrainsComponent,
    AddTrainComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, ShareUiModule,ReactiveFormsModule],
})
export class AdminModule {}
