import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { ProfileComponent } from './profile.component';
import { SharedModule, UserService } from '../shared';

export const route:ModuleWithProviders = RouterModule.forChild(
  [{
    path: 'profile',
    component: ProfileComponent
  }]
)

@NgModule({
  imports: [
    route,
    SharedModule
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [
    UserService
  ]
})

export class ProfileModule{}
