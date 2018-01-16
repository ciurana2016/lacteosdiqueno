import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { VideosComponent } from './pages/videos/videos.component';
import { ColaboraComponent } from './pages/colabora/colabora.component';
import { LosnodeloslacteosComponent } from './pages/losnodeloslacteos/losnodeloslacteos.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'videos',
    component: VideosComponent,
  },
  {
    path: 'colabora',
    component: ColaboraComponent,
  },
  {
    path: 'los_no_de_los_lacteos',
    component: LosnodeloslacteosComponent,
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
