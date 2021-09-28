import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _global:GlobalService, private _router:Router) { }

  ngOnInit(): void {
    this._global.me().subscribe(
      data=>{console.log(data)},
      ()=>{ this._router.navigate(['/user/login'])},
      ()=>{}
      
      )
  } 

}
