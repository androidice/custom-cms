import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

export const homeRoute: ModuleWithProviders = RouterModule.forChild([
   {
     path: '',
     component: HomeComponent
   }
]);

@NgModule({
 imports: [
   homeRoute
 ],
 declarations: [
   HomeComponent
 ],
 providers: []
})

export class HomeModule {}
