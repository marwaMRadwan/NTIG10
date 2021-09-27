import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddrComponent } from './pages/add-addr/add-addr.component';
import { AddpostComponent } from './pages/addpost/addpost.component';
import { EditpostComponent } from './pages/editpost/editpost.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShowmypostsComponent } from './pages/showmyposts/showmyposts.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"user", children:[
    {path:"register", component:RegisterComponent},
    {path:"login", component:LoginComponent},
    {path:"addAddr", component:AddAddrComponent},
    {path:"profile",component:ProfileComponent}
  ]},
  {path:"post", children:[
    {path:"addPost", component:AddpostComponent},
    {path:"editPost", component:EditpostComponent},
    {path:"myPosts", component:ShowmypostsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
