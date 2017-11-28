import { Injectable, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { Observable } from 'rxjs/Rx';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import * as firebase from 'firebase';
import 'firebase/storage';

@Injectable()
export class UploadService {
  constructor(private firebaseApp: FirebaseApp) {

  }

  uploadProfileImage(user, img): Promise<boolean> {
    return new Promise((resolve, reject)=>{
      try {
        let storageRef = this.firebaseApp.storage().ref();
        let path = `/images/profile/${user.uid}`;
        var iRef = storageRef.child(path);
        iRef.putString(img.replace('data:image/jpeg;base64,','') , 'base64', {contentType: 'image/png'})
          .then((snapshot)=> {
            //TODO add/ update user here with angular fire database
            resolve(true);
          });
      }
      catch(error){
        console.log(error);
        reject(error);
      }
    })

  }
}
