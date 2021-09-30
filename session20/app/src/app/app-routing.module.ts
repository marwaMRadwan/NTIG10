import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AddtaskComponent } from './pages/task/addtask/addtask.component';
import { MytasksComponent } from './pages/task/mytasks/mytasks.component';
import { SingletaskComponent } from './pages/task/singletask/singletask.component';
import { EditprofileComponent } from './pages/user/editprofile/editprofile.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';

const routes: Routes = [
  {path:"", component:HomepageComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"editProfile", component:EditprofileComponent},
  {path:"addTask", component:AddtaskComponent},
  {path:"editTask/:id", component:SingletaskComponent},
  {path:"myTasks", component:MytasksComponent},
  {path:"myTasks/:id", component:SingletaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
