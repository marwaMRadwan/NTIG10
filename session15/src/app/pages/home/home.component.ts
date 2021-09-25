import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // monthNum = 13

  // status: boolean = false
  myData:any[]=[]
  constructor(private _data:DataService) { }

  ngOnInit(): void {
    this._data.getAllPosts().subscribe(data=>{
      console.log(data)
    })
  }
// changeStatus(){
//   this.status=!this.status
// }
}
