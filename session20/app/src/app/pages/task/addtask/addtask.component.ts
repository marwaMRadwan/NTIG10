import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  taskForm = new FormGroup({
    description:new FormControl('',[Validators.required])
  })
  get description(){ return this.taskForm.get('description')}
  constructor(private _task:TaskService, private _router:Router) { }

  ngOnInit(): void {
  }
  addTask(){
if(this.taskForm.valid){
  this._task.addTask(this.taskForm.value).subscribe(
    data=>{},
    ()=>{},
    ()=>{ this._router.navigateByUrl('/myTasks')}
  )
}
  }
}
