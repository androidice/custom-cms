import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashBoardComponent } from './dashboard.component';
import { AuthGuard } from '../shared/services';

export const route: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'dashboard',
    component: DashBoardComponent
  }
]);

@NgModule({
  imports: [
    route
  ],
  declarations: [
    DashBoardComponent
  ],
  providers: []
})

export class DashBoardModule{}
