import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsloggedGuard } from './guards/islogged.guard';
import { IsnotLoggedGuard } from './guards/isnot-logged.guard';
import { Err404Component } from './pages/err404/err404.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AddtaskComponent } from './pages/task/addtask/addtask.component';
import { MytasksComponent } from './pages/task/mytasks/mytasks.component';
import { SingletaskComponent } from './pages/task/singletask/singletask.component';
import { EditprofileComponent } from './pages/user/editprofile/editprofile.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';

const routes: Routes = [
  {path:"", component:HomepageComponent},
  {path:"login", component:LoginComponent, canActivate:[IsloggedGuard]},
  {path:"register", component:RegisterComponent, canActivate:[IsloggedGuard]},
  {path:"editProfile", component:EditprofileComponent, canActivate:[IsnotLoggedGuard]},
  {path:"addTask", component:AddtaskComponent, canActivate:[IsnotLoggedGuard]},
  {path:"editTask/:id", component:SingletaskComponent, canActivate:[IsnotLoggedGuard]},
  {path:"myTasks", component:MytasksComponent, canActivate:[IsnotLoggedGuard]},
  {path:"myTasks/:id", component:SingletaskComponent, canActivate:[IsnotLoggedGuard]},
  {path:"**", component:Err404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
