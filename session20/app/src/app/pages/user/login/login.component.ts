import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg = ""
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password:new FormControl('', [Validators.required, Validators.minLength(3)]),
  })
  get password(){ return this.loginForm.get('password')}
  get email(){ return this.loginForm.get('email')}
  constructor( public _user:UserService, private _router:Router) { }


  ngOnInit(): void {
  }
login(){
  if(this.loginForm.valid){
    this._user.login(this.loginForm.value).subscribe(
      data=>{ 
        localStorage.setItem('tasksToken',`Bearer ${data.token}`)
console.log(data)
       },
      (e)=>{
        this.msg = "unauthorized"
        },
      ()=>{
        this._user.isLogin=true
        this.loginForm.reset()
        this._router.navigateByUrl('/myTasks')
      }
      )
    }
}
}
