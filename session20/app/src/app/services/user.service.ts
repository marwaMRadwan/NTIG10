import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
public isLogin = localStorage.getItem('tasksToken')?true:false

  commonURL = `http://localhost:3000/`
  constructor(private _http:HttpClient) { }

  register(data:any):Observable<any>{
    return this._http.post(`${this.commonURL}users`, data)
  }
  login(data:any):Observable<any>{
    return this._http.post(`${this.commonURL}users/login`, data)
  }

  logout():Observable<any>{
    return this._http.post(`${this.commonURL}users/logout`, null)
  }

  getProfile():Observable<any>{
    return this._http.get(`${this.commonURL}users/me`)
  }

  editProfile(data:any):Observable<any>{
    return this._http.patch(`${this.commonURL}users/me`, data)
  }

  deleteProfile():Observable<any>{
    return this._http.delete(`${this.commonURL}users`)
  }

}
