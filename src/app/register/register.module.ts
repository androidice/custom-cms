import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { RegisterComponent } from './register.component';
import { EmailPasswordComponent } from '../shared/components'
import { SharedModule, UserService } from '../shared';

export const route: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'sign-up',
    component: RegisterComponent
  }
])

@NgModule({
  imports: [
    route,
    SharedModule
  ],
  declarations: [
    RegisterComponent,
    EmailPasswordComponent
  ],
  providers: [
    UserService
  ]
})

export class RegisterModule {}
