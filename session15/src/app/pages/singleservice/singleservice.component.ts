import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-singleservice',
  templateUrl: './singleservice.component.html',
  styleUrls: ['./singleservice.component.css']
})
export class SingleserviceComponent implements OnInit {
  myData:any = {}
  constructor(private _activatedRoute: ActivatedRoute, private _data:DataService) { }

  ngOnInit(): void {
  //   this._activatedRoute.params.subscribe(data=>{
  //     console.log(data.id)
  //     this._data.getSinglePost(data.id).subscribe(all=>{
  //       console.log(all)
  //     })
  //   })
  // let id = this._activatedRoute.snapshot.paramMap.get('id')

  let id = this._activatedRoute.snapshot.params.id
  console.log(id)
  this._data.getSinglePost(id).subscribe(all=>{
          console.log(all)
          this.myData=all
        })
  }

}
