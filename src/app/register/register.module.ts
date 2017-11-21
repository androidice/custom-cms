import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

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
    FormsModule
  ],
  declarations: [
    RegisterComponent
  ],
  providers: []
})

export class RegisterModule {}
