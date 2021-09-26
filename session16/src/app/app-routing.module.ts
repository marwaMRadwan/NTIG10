import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C1Component } from './components/c1/c1.component';
import { RegisterComponent } from './forms/register/register.component';

const routes: Routes = [
  // {path:"", component:C1Component}
  {path:"", component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
