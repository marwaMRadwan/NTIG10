import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-mytasks',
  templateUrl: './mytasks.component.html',
  styleUrls: ['./mytasks.component.css']
})
export class MytasksComponent implements OnInit {
myTasks: any[]= []
  constructor(private _task:TaskService) { }

  ngOnInit(): void {
    this.getMyTasks()
  }

  getMyTasks(){
this._task.allTasks().subscribe(data=>{ this.myTasks=data})
  }
  delTask(id:any, i:any){
    this._task.deleteTask(id).subscribe(
      data=>{},
      ()=>{},
      ()=>{
        this.myTasks.splice(i,1)
      }
    )
  }
}
