
import {ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module'
import { ProfileModule } from './profile/profile.module';
import { RegisterModule } from './register/register.module';
import { DashBoardModule } from './dashboard/dashboard.module';

import { AppComponent } from './app.component';

import { FooterComponent, HeaderComponent} from './shared/layout';

import { SharedModule, UserService, AuthGuard } from './shared';
import { UploadService } from './shared/services';

export const firebaseConfig = {
  apiKey: "AIzaSyDw-VGTzkc8BrlibvgP-lhsY3dMBi7wDhA",
  authDomain: "custom-801ba.firebaseapp.com",
  databaseURL: "https://custom-801ba.firebaseio.com",
  projectId: "custom-801ba",
  storageBucket: "custom-801ba.appspot.com",
  messagingSenderId: "842267089351"
};

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: false });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    HomeModule,
    LoginModule,
    RegisterModule,
    DashBoardModule,
    ProfileModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    rootRouting,
    SharedModule
  ],
  exports: [RouterModule],
  providers: [
    UserService,
    AuthGuard,
    UploadService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
