import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email:new FormControl("marwa@nti.com"),
    password: new FormControl("123456789")
  })

  constructor(private _global:GlobalService, private _router:Router) { }

  ngOnInit(): void {
  }

  login(){
    this._global.login(this.loginForm.value).subscribe(
      data=>{  localStorage.setItem('TodoAppToken', data.data.token) },
      ()=>{},
      ()=>{
        this._global.navMenu = this._global.myLoggedRoutes
        this._router.navigateByUrl('/user/profile')
      }
      
      )
  }
}
