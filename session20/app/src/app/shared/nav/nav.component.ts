import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public _user:UserService, private _router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this._user.logout().subscribe(
      data=>{},
      ()=>{},
      ()=>{
        this._user.isLogin=false
        localStorage.removeItem('tasksToken')
        this._router.navigateByUrl('/')
      }
    )
  }

}
