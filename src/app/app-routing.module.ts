import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HealthDataComponent } from './health-data/health-data.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { RelativesComponent } from './relatives/relatives.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', component: HealthDataComponent },
      { path: 'healthData', component: HealthDataComponent },
      { path: 'userCenter', component: UserCenterComponent },
      { path: 'relatives', component: RelativesComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }