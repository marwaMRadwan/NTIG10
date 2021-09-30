import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-singletask',
  templateUrl: './singletask.component.html',
  styleUrls: ['./singletask.component.css']
})
export class SingletaskComponent implements OnInit {
myTask:any = {}
  constructor(private _route:ActivatedRoute, private _task:TaskService) { }

  ngOnInit(): void {
    this.getMyTask()
  }

  getMyTask(){
    this._task.singleTask(this._route.snapshot.params.id).subscribe(data=>{
      this.myTask=data
    })
  }

}
