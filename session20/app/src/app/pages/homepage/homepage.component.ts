import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
file:any
  constructor(private _user:UserService) { }

  ngOnInit(): void {
  }

  onChangeFile(event:any){
    console.log(event.target.files)
    this.file=event.target.files[0]
  }
  upimg(){
    this._user.uploadImg(this.file).subscribe(data=>{console.log(data)})
  }
}
