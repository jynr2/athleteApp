import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AthleteInfoComponent } from './components/athlete-info/athlete-info.component';
import { LoginComponent } from './components/login/login.component';
import { MedalDetailsComponent } from './components/medal-details/medal-details.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'athletes-info',
    component: AthleteInfoComponent
  },
  {
    path:'medal-details',
    component: MedalDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
