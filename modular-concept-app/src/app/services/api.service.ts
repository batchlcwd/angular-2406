import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  getUser() {
    return {
      name: 'Suraj',
      phone: '23523',
    };
  }
}
