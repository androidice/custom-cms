import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeAuthResolver } from './home-auth-resolver.service';

export const route: ModuleWithProviders = RouterModule.forChild([
   {
     path: '',
     component: HomeComponent,
     resolve: {
       isAuthenticated: HomeAuthResolver
     }
   }
]);

@NgModule({
 imports: [
   route
 ],
 declarations: [
   HomeComponent
 ],
 providers: [
   HomeAuthResolver
 ]
})

export class HomeModule {}
