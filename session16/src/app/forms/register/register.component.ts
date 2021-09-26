import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userData = {
    name:"",
    email:"",
    password:"",
    gender:"",
    dateOfBirth:"", 
    role:1
  }
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
  }
  onRegister(data:any){
    
    if(data.valid){
      // console.log(data.value)
      console.log(this.userData)
      this._userService.registerUser(this.userData).subscribe(data=>{
        console.log(data)
      })
    }
  }
}
