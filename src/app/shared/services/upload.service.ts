import { Injectable, Inject } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { Observable } from 'rxjs/Rx';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import 'firebase/storage';

@Injectable()
export class UploadService {
  constructor(private firebaseApp: FirebaseApp,
              private afStore: AngularFirestore) {

  }

  uploadProfileImage(user, img): Promise<boolean> {
    return new Promise((resolve, reject)=>{
      try {
        let storageRef = this.firebaseApp.storage().ref();
        let path = `/images/profile/${user.uid}`;
        var iRef = storageRef.child(path);
        img = img.replace('data:image/jpeg;base64,','') ;
        img = img.replace('data:image/png;base64,','') ;
        iRef.putString(img , 'base64', {contentType: 'image/png'})
          .then((snapshot)=> {
            this.afStore.collection('users').doc(user.uid).update({
              profile: {
                path,
                filename: user.uid
              }
            }).then(()=>{
              resolve(true);
            })
            .catch((error)=> {
              reject(error);
            })
          });
      }
      catch(error){
        reject(error);
      }
    })

  }

  getProfileImage() {

  }
}
