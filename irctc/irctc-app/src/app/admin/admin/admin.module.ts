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
import { ListStationsComponent } from '../pages/list-stations/list-stations.component';
import { AddStationComponent } from '../pages/add-station/add-station.component';
import { AddRouteComponent } from '../pages/add-route/add-route.component';
import { ListRoutesComponent } from '../pages/list-routes/list-routes.component';
import { CustomButton } from "../../components/custom-button.component";
import { Badge } from "primeng/badge";
@NgModule({
  declarations: [
    AdminComponent,
    SidemenuComponent,
    DashboardHomeComponent,
    ListTrainsComponent,
    AddTrainComponent,
    ListStationsComponent,
    AddStationComponent,
    AddRouteComponent,
    ListRoutesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ShareUiModule,
    ReactiveFormsModule,
    CustomButton,
    Badge
],
})
export class AdminModule {}
