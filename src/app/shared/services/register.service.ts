import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class RegisterService {

  constructor(private afAuth: AngularFireAuth) {}

  register(data): Promise<any> {
    return new Promise((resolve, reject)=>{
      this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
      .then((result)=>{
        resolve(result);
      },(error) => {
        reject(error);
      });
    });
  }
}
