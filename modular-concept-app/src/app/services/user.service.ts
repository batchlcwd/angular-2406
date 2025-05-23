import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  create(user: User) {
    console.log('user creating logic');
  }

  update(userId: number, user: User) {
    console.log('logic to update');
  }

  delete(userId: number) {
    console.log('logic to delete');
  }

  get(userId: number) {
    console.log('logic to get one');
  }

  getAll() {
    console.log('logic to get all');
  }
}
