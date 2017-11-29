import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashBoardComponent } from './dashboard.component';
import { AuthGuard } from '../shared/services';

export const dashboardRoute: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'dashboard',
    component: DashBoardComponent
  }
]);

@NgModule({
  imports: [
    dashboardRoute
  ],
  declarations: [
    DashBoardComponent
  ],
  providers: []
})

export class DashBoardModule{}
