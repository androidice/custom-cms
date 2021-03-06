import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ProfileComponent } from './profile.component';
import { SharedModule, UserService, UploadService} from '../shared';

export const profileRoute:ModuleWithProviders = RouterModule.forChild(
  [{
    path: 'profile',
    component: ProfileComponent
  }]
)

@NgModule({
  imports: [
    profileRoute,
    SharedModule
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [
    UserService,
    UploadService
  ]
})

export class ProfileModule{}
