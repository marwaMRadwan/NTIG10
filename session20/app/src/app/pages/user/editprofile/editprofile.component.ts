import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  msg = ""
  editForm = new FormGroup({
    name:new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    age: new FormControl()
  })
  get name(){return this.editForm.get('name')}
  get age(){ return this.editForm.get('age')}
  get email(){ return this.editForm.get('email')}
  constructor( private _user:UserService, private _router:Router) { }

  ngOnInit(): void {
    this._user.getProfile().subscribe(data=>{
      console.log(data)
      this.editForm.patchValue(data)
    })
  }
edit(){
  if(this.editForm.valid){
    this._user.editProfile(this.editForm.value).subscribe(
      data=>{  },
      (e)=>{
        if(e.error.includes('email')) this.msg= "please choose another email"
        else if(e.error.includes('name')) this.msg= "please choose another name"
        else if(e.error.includes('password')) this.msg= "please choose another pass"
        },
      ()=>{
        this.msg = "successfully registered" 
        this.editForm.reset()
        this._router.navigateByUrl('/')
      }
      )
  }

}

}
