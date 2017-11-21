import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

import { User } from '../models';

@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>(new User());
  public currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();


  constructor(private afAuth: AngularFireAuth){
    
  }

  setAuth(user: User): void {
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }


  register(data): Promise<User> {
    return new Promise((resolve, reject)=>{
      this.afAuth.auth.createUserWithEmailAndPassword(data.email, data.password)
      .then((result)=>{
        let user = new User();
        user.displayName = result.displayName;
        user.email = result.email,
        user.emailVerified = result.emailVerified;
        user.isAnonymous = result.isAnonymous;
        user.photoURL = result.photoURL;
        user.providerData = result.providerData;
        user.refreshToken = result.refreshToken;
        user.uid = result.uid;
        resolve(user);
      },(error) => {
        reject(error);
      });
    });
  }
}
