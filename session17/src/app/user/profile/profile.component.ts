import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private _user:UserService) { }

  ngOnInit(): void {
    this.getMe()
  }

  getMe(){
this._user.me().subscribe(
  data=>{ console.log(data)},
  (e)=>{ console.log(e) },
  ()=> { console.log(2) }
  )
  }
}
