import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  commonURL = "http://medical.mind-techs.com/api/auth/"
  constructor(private _http:HttpClient) { }

  login(data:any):Observable<any>{
    return this._http.post(`${this.commonURL}login`, data)
  }
  me():Observable<any>{
    return this._http.post(`${this.commonURL}me`, {"lang" : 1})
  }
}
