import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { RegisterComponent } from './register.component';

export const route: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'sign-up',
    component: RegisterComponent
  }
])

@NgModule({
  imports: [
    route,
    FormsModule
  ],
  declarations: [
    RegisterComponent
  ],
  providers: []
})

export class RegisterModule {}
