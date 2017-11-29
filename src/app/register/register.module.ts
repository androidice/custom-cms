import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { RegisterComponent } from './register.component';
import { EmailPasswordComponent } from '../shared/components'
import { SharedModule, UserService } from '../shared';

export const signUpRoute: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'sign-up',
    component: RegisterComponent
  }
])

@NgModule({
  imports: [
    signUpRoute,
    SharedModule
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [
    UserService
  ]
})

export class RegisterModule {}
