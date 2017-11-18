import { Injectable } from '@angular/core';

@Injectable()
export class RegisterService {

  constructor() { }

  register(data): void {
    console.log('register called')
  }

}
