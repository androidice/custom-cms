import { BrowserModule } from '@angular/platform-browser';
import {ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent, HeaderComponent} from './shared';

import { RegisterService } from '../services/register.service';

export const firebaseConfig = {
  apiKey: "AIzaSyDw-VGTzkc8BrlibvgP-lhsY3dMBi7wDhA",
  authDomain: "custom-801ba.firebaseapp.com",
  databaseURL: "https://custom-801ba.firebaseio.com",
  projectId: "custom-801ba",
  storageBucket: "custom-801ba.appspot.com",
  messagingSenderId: "842267089351"
};

export const rootRouting: ModuleWithProviders = RouterModule.forRoot([]);


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HomeModule,
    rootRouting
  ],
  providers: [
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
