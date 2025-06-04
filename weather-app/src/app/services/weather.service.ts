import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  baseUrl = 'https://api.weatherapi.com/v1/';
  apiKey = '70eda467c1494dd992a151714250406';

  getCurrentWeather(city: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/current.json?key=${this.apiKey}&q=${city}`
    );
  }
  getForecast(city: string, days: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/forecast.json?key=${this.apiKey}&q=${city}&days=${days}`
    );
  }
}
