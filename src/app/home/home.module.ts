import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

export const route: ModuleWithProviders = RouterModule.forChild([
   {
     path: '',
     component: HomeComponent
   }
]);

@NgModule({
 imports: [
   route
 ],
 declarations: [
   HomeComponent
 ],
 providers: []
})

export class HomeModule {}
