import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPersonalComponent } from '../empleados/info-personal/info-personal.component';

const routes: Routes = [
  {path : 'empleados', component: InfoPersonalComponent },
  {path : '', pathMatch: 'full', redirectTo: '/info-Personal' },
  {path: '**', redirectTo: '/info-Personal'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
