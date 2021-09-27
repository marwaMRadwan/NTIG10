import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  commonUrl = "http://localhost:3000/"
  constructor(private _http: HttpClient) { }
  register(data:any):Observable<any>{
    return this._http.post(`${this.commonUrl}user/register`, data)
  }
  login(data:any):Observable<any>{
    return this._http.post(`${this.commonUrl}user/login`, data)
  }
  addAddr(data:any, id:any):Observable<any>{
    return this._http.post(`${this.commonUrl}user/addAddr/${id}`, data)
  }
  logout():Observable<any>{
    return this._http.post(`${this.commonUrl}user/logout`, null)
  }
  me():Observable<any>{
    return this._http.post(`${this.commonUrl}user/me`, null)
  }
  addPImg(data:any):Observable<any>{
    return this._http.post(`${this.commonUrl}user/addPImg`, data)
  }
  addPost(data:any):Observable<any>{
    return this._http.post(`${this.commonUrl}post/add`, data)
  }
  myPosts():Observable<any>{
    return this._http.get(`${this.commonUrl}post/myPosts`)
  }
  editPost(data:any, id:any):Observable<any>{
    return this._http.patch(`${this.commonUrl}post/${id}`, data)
  }
}
