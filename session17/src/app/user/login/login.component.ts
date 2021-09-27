import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(),
    password:new FormControl()
  })
  constructor(private _user:UserService) { }

  ngOnInit(): void {
  }

  login(){
    this._user.login(this.loginForm.value).subscribe(
      data=>{
        console.log(data.access_token)
        localStorage.setItem('appToken', `bearer ${data.access_token}`)
      },
      ()=>{},
      ()=>{
        
      }
    )
  }

}
