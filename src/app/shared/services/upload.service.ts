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

  uploadProfileImage(user, img): Promise<object> {
    return new Promise((resolve, reject)=>{
      try {
        let storageRef = this.firebaseApp.storage().ref();
        let path = `/images/profile/${user.uid}`;
        let imgSrc;
        var iRef = storageRef.child(path);
        iRef.putString(img.substr(img.indexOf(',') + 1) , 'base64', {contentType: 'image/png'})
          .then((snapshot)=> {
            return this.afStore.collection('users').doc(user.uid).update({
              profile: {
                image: {
                  path,
                  filename: user.uid
                }
              }
            })
          })
          .then(()=> {
              return this.getDownloadURL(path);
          })
          .then((_imgSrc)=> {
              imgSrc = _imgSrc;
              return this.afStore.collection('users').doc(user.uid).update({
              "profile.image.imgUrl": _imgSrc
              })
          }).then(()=>{
            resolve({
                imgSrc,
                status: true
            }
            );
          })
          .catch((error)=> {
            reject(error)
          });
      }
      catch(error){
        reject(error);
      }
    })
  }

  getProfileImage(user): Promise<object> {
    return new Promise((resolve, reject)=>{
      try{
        this.afStore.collection('users').doc(user.uid).ref.get()
        .then((doc) => {
          if(doc && doc.exists){
            let profile = doc.data().profile || {};
            this.getDownloadURL(profile.image.path)
            .then((url)=>{
              let result = {
                imgSrc: url,
                path: profile.image.path,
                filename: profile.image.filename
              }
              resolve(result);
            });
          }
        })
        .catch((error) => {
            reject(error);
        });
      }
      catch(error){
        reject(error);
      }
    });
  }

  getDownloadURL(imagePath): Promise<string> {
    return new Promise((resolve, reject)=> {
      try{
        let storage = this.firebaseApp.storage();
        var imgReference = storage.ref(imagePath || '');
        imgReference.getDownloadURL()
        .then((url)=>{
          resolve(url);
        })
      }catch(error) {
        resolve(error);
      }
    });
  }
}
