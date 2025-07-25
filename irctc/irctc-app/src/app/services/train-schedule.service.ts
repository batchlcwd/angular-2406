import { Injectable } from '@angular/core';
import { TrainSchedule } from '../models/schedule';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrainScheduleService {
  getTrainSchedules(id: number) {
    return this._http.get<TrainSchedule[]>(
      `${environment.apiUrl}/admin/train-schedules/train/${id}`
    );
  }
  constructor(private _http: HttpClient) {}
  addSchedule(value: TrainSchedule) {
    return this._http.post(
      `${environment.apiUrl}/admin/train-schedules`,
      value
    );
  }

  delete(id: number) {
    return this._http.delete(
      `${environment.apiUrl}/admin/train-schedules/${id}`
    );
  }
}
