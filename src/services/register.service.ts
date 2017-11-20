import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class RegisterService {

  constructor(private afAuth: AngularFireAuth) { }

  register(data): void {
    debugger;
    this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
    .then((result)=>{
      console.log('result', result);
      console.log('afAuth', this.afAuth);
      console.log('firebase', firebase);
    },(error)=> {
      console.log('error', error);
    });
  }

}
