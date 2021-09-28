import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
myRoutes = [
  {path:"", key:"home"},
  {path:"user/register", key:"Register", isAuth:false},
  {path:"user/login", key:"login", isAuth:false}]
  myLoggedRoutes=[
    {path:"", key:"home"},
    {path:"user/addAddr", key:"add address",isAuth:true },
  {path:"user/profile",key:"Profile", isAuth:true},
  {path:"post/addPost", key:"add post",isAuth:true},
  {path:"post/editPost", key:"Edit post",isAuth:true},
  {path:"post/myPosts", key:"Show my posts", isAuth:true}
]
  constructor(public _global:GlobalService) { }
  ngOnInit(): void {
  }
}