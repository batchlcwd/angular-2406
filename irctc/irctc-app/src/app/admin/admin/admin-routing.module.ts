import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardHomeComponent } from '../pages/dashboard-home/dashboard-home.component';
import { ListTrainsComponent } from '../pages/list-trains/list-trains.component';
import { AddTrainComponent } from '../pages/add-train/add-train.component';
import { ListStationsComponent } from '../pages/list-stations/list-stations.component';
import { AddStationComponent } from '../pages/add-station/add-station.component';
import { ListRoutesComponent } from '../pages/list-routes/list-routes.component';
import { AddRouteComponent } from '../pages/add-route/add-route.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'home',
        component: DashboardHomeComponent,
        title: 'Admin Dashboard',
      },
      {
        path: 'trains',
        component: ListTrainsComponent,
        title: 'Train List',
      },
      {
        path: 'add-train',
        component: AddTrainComponent,
        title: 'Add new Train',
      },
      {
        path: 'stations',
        component: ListStationsComponent,
        title: 'Stations List',
      },
      {
        path: 'add-station',
        component: AddStationComponent,
        title: 'Add New Station',
      },
      {
        path: 'routes',
        component: ListRoutesComponent,
        title: 'Train Routes',
      },
      {
        path: 'add-route',
        component: AddRouteComponent,
        title: 'Add Train Route',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
