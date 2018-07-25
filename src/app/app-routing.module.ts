import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LocationsComponent } from './components/locations/locations.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'locations', component: LocationsComponent},
]

@NgModule({
  exports: [
    RouterModule
  ],

  imports: [
    RouterModule.forRoot(routes)
  ],

  declarations: [

  ]
})
export class AppRoutingModule { }
