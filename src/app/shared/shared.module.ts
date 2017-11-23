import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


export const firebaseConfig = {
  apiKey: "AIzaSyDw-VGTzkc8BrlibvgP-lhsY3dMBi7wDhA",
  authDomain: "custom-801ba.firebaseapp.com",
  databaseURL: "https://custom-801ba.firebaseio.com",
  projectId: "custom-801ba",
  storageBucket: "custom-801ba.appspot.com",
  messagingSenderId: "842267089351"
};


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  declarations: [],
  exports: [CommonModule,
            FormsModule,
            RouterModule,
            HttpModule,
            AngularFireModule,
            AngularFireDatabaseModule,
            AngularFireAuthModule]
})
export class SharedModule {}
