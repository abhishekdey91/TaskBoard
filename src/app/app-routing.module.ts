import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LpSectionComponent } from './lp-section/lp-section.component';


const routes: Routes = [
  { path: '', redirectTo: '/landingpage', pathMatch: 'full' },
  { path: 'landingpage', component: LpSectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
