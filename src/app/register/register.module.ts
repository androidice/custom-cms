import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { SharedModule, UserService } from '../shared';
import { RegisterComponent } from './register.component';

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
  ]
})

export class RegisterModule {}
