import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleserviceComponent } from './pages/singleservice/singleservice.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"service", component:SingleserviceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
