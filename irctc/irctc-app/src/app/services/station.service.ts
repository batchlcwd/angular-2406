import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Station, StationsResponse } from '../models/station';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StationService {
  constructor(private httpClient: HttpClient) {}

  getStations(page = 0, size = 3): Observable<StationsResponse<Station>> {
    return this.httpClient.get<StationsResponse<Station>>(
      `${environment.apiUrl}/admin/stations?page=${page}&size=${size}`
    );
  }
  addStations(station: Station) {
    return this.httpClient.post(
      `${environment.apiUrl}/admin/stations`,
      station
    );
  }
  deleteStation(stationId: number) {
    return this.httpClient.delete(
      `${environment.apiUrl}/admin/stations/${stationId}`
    );
  }
}
