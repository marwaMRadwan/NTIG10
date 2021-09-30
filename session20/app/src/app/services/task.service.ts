import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  commonURL = `http://localhost:3000/`
  constructor(private _http:HttpClient) { }

  addTask(data:any):Observable<any>{
    return this._http.post(`${this.commonURL}tasks`, data)
  }
  allTasks():Observable<any>{
    return this._http.get(`${this.commonURL}tasks`)
  }
  singleTask(id:any):Observable<any>{
    return this._http.get(`${this.commonURL}tasks/${id}`)
  }
  editTask(id:any, data:any):Observable<any>{
    return this._http.patch(`${this.commonURL}tasks/${id}`, data)
  }
  deleteTask(id:any):Observable<any>{
    return this._http.delete(`${this.commonURL}tasks/${id}`)
  }
}
