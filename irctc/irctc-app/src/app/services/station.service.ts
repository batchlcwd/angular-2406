import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Station } from '../models/station';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StationService {
  constructor(private httpClient: HttpClient) {}

  getStations(): Observable<any> {
    return this.httpClient.get<Station[]>(
      `${environment.apiUrl}/admin/stations`
    );
  }
}
