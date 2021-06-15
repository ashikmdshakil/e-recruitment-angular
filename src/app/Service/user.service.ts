import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
   }
   
   signUpUser(user: User): Observable<any>{
    return this.http.post('http://localhost:8080/signupUser',user,{'responseType': 'text'});
   }
   signUpAdmin(user: User): Observable<any>{
    return this.http.post('http://localhost:8080/signupAdmin',user,{'responseType': 'text'});
   }
   signIn(email: string, password: string){
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(email + ':' + password)
  }); 
     return this.http.get('http://localhost:8080/signIn',{headers: headers});
   }

   getUserByEmail(email: string): Observable<any>{
    let param = new HttpParams()
    .set('email' , email);

    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get('http://localhost:8080/getUserByEmail',{headers: headers,params: param})
   }

}
