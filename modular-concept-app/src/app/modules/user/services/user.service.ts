import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor() {}

  getUser() {
    console.log('user service called');

    return 'sahil';
  }
}
