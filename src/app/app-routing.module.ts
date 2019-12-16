import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LectorComponent } from './lector/lector.component';


const routes: Routes = [
  { path: '', component: LectorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
