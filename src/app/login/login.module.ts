import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { LoginComponent } from './login.component';
import { EmailPasswordComponent } from '../shared/components'
import { SharedModule, UserService } from '../shared';

export const route:ModuleWithProviders = RouterModule.forChild(
  [{
    path: 'login',
    component: LoginComponent
  }]
)

@NgModule({
  imports: [
    route,
    SharedModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    UserService
  ]
})

export class LoginModule{}
