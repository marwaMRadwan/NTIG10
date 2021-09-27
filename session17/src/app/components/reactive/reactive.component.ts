import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    dateOfBirth:new FormControl(),
    password:new FormControl("", [Validators.required]),
    email:new FormControl("", [Validators.email]),
    role:new FormControl(1),
    gender: new FormControl("", [Validators.required])
  })

  get name() { return this.registerForm.get('name')}
  constructor() { }

  ngOnInit(): void {
  }
  handleRegister(){
    console.log(this.registerForm.value)
  }
}
