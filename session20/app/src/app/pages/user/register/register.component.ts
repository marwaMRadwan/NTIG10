import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
msg = ""
  registerForm = new FormGroup({
    name:new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password:new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl()
  })
  get name(){return this.registerForm.get('name')}
  get age(){ return this.registerForm.get('age')}
  get password(){ return this.registerForm.get('password')}
  get email(){ return this.registerForm.get('email')}
  constructor( private _user:UserService, private _router:Router) { }

  ngOnInit(): void {
  }
register(){
  if(this.registerForm.valid){
    this._user.register(this.registerForm.value).subscribe(
      data=>{  },
      (e)=>{
        if(e.error.includes('email')) this.msg= "please choose another email"
        else if(e.error.includes('name')) this.msg= "please choose another name"
        else if(e.error.includes('password')) this.msg= "please choose another pass"
        },
      ()=>{
        this.msg = "successfully registered" 
        this.registerForm.reset()
        this._router.navigateByUrl('/login')
      }
      )
  }

}
}
