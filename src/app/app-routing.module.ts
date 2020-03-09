import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MapComponent } from './map/map.component';


const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: '',
    component: MapComponent
  },
  {
    path: '**',
    component: MapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
