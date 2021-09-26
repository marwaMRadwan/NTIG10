import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  registerUser(userData:any):Observable<any>{
    return this._http.post('http://medical.mind-techs.com/api/auth/signUp', userData)
  }
  
}
