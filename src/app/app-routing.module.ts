import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'contact', component: ContactComponent},
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
