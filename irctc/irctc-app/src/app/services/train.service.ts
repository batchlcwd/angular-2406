import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Train } from '../models/train';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TrainService {
  // Use the API URL from the environment
  constructor(private httpClient: HttpClient) {}

  getTrains(): Observable<Train[]> {
    return this.httpClient.get<Train[]>(`${environment.apiUrl}/admin/trains`);
  }

  addTrain(train: Train): Observable<Train> {
    return this.httpClient.post<Train>(
      `${environment.apiUrl}/admin/trains`,
      train
    );
  }

  //delete train
  deleteTrain(number: number) {
    return this.httpClient.delete(
      `${environment.apiUrl}/admin/trains/${number}`
    );
  }
}
