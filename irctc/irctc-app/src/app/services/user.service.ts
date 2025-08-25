import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  searchTrain(searchReqeuest: any) {
    return this.http.post(
      `${environment.apiUrl}/user/trains/search`,
      searchReqeuest
    );
  }
}
