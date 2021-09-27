import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
myRoutes = [
  {path:"", key:"home"},
  {path:"user/register", key:"Register"},
  {path:"user/login", key:"login"},
  {path:"user/addAddr", key:"add address"},
  {path:"user/profile",key:"Profile"},
  {path:"post/addPost", key:"add post"},
  {path:"post/editPost", key:"Edit post"},
  {path:"post/myPosts", key:"Show my posts"}
]
  constructor() { }
  ngOnInit(): void {
  }
}