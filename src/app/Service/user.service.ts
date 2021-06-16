import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certifications } from '../Model/Certifications.model';
import { Education } from '../Model/Education.model';
import { Experience } from '../Model/Experience.model';
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

   getUserById(id: string): Observable<any>{
    let param = new HttpParams()
    .set('id' , id);

    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get('http://localhost:8080/getUserById',{headers: headers,params: param})
   }

   addExperience(experience: Experience): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post('http://localhost:8080/addExperience',experience,{headers: headers, responseType: "text"});
   }

   getExperiences(id: string): Observable<any>{
    let param = new HttpParams()
    .set('id' , id);

    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get('http://localhost:8080/getExperiences',{headers: headers,params: param})
   }

   addEducation(education: Education): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post('http://localhost:8080/addEducation',education,{headers: headers, responseType: "text"});
   }

   getEducations(id: string): Observable<any>{
    let param = new HttpParams()
    .set('id' , id);

    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get('http://localhost:8080/getEducations',{headers: headers,params: param})
   }

   addCertification(certification: Certifications): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post('http://localhost:8080/addCertification',certification,{headers: headers, responseType: "text"});
   }

   getCertifications(id: string): Observable<any>{
    let param = new HttpParams()
    .set('id' , id);

    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get('http://localhost:8080/getCertifications',{headers: headers,params: param})
   }

   updateCV(user: User): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
    return this.http.post('http://localhost:8080/updateCV',user,{headers: headers, responseType: "text"});
   }



}
