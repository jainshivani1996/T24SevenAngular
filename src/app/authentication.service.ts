import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:9090/api/login';
  constructor(private http: HttpClient) { }
  
  userlogin(user:Object):Observable<any>{
    return this.http.post(`${this.baseUrl}`,user);
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('admin')
    console.log(!(user === null))
    return !(user === null)
  }
  
  logOut(){
    sessionStorage.removeItem('admin');
  }

  
}
