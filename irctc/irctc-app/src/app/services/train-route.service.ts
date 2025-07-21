import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrainRoute } from '../models/trainroute';
import { environment } from '../../environments/environment';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root',
})
export class TrainRouteService {
  constructor(private _http: HttpClient, private _util: UtilService) {}

  addRoute(addRoute: TrainRoute) {
    addRoute.arrivalTime = this._util.extractLocalTimeFromISO(
      addRoute.arrivalTime
    );
    addRoute.departureTime = this._util.extractLocalTimeFromISO(
      addRoute.departureTime
    );

    return this._http.post<TrainRoute>(
      `${environment.apiUrl}/admin/train-routes`,
      addRoute
    );
  }

  // get route of train
  getRouteOfTrain(trainId: number) {
    return this._http.get<TrainRoute[]>(
      `${environment.apiUrl}/admin/train-routes/train/${trainId}`
    );
  }
}
