import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Circular } from '../Model/Circular.model';
import { Evalution } from '../Model/Evalution.model';

@Injectable({
  providedIn: 'root'
})
export class CircularService {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
   }

   createCircular(circular: Circular): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.post('http://localhost:8080/createCircular',circular,{headers: headers})
   }

   adminGetsCirculars(id: string): Observable<any>{
    let param = new HttpParams()
    .set('id' , id);

    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get('http://localhost:8080/adminGetsCirculars',{headers: headers,params: param})
   }

   getCircular(token: string): Observable<any>{
    let param = new HttpParams()
    .set('token' , token);

    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get('http://localhost:8080/getCircular',{headers: headers,params: param})
   }

   getCircularById(id: string): Observable<any>{
    let param = new HttpParams()
    .set('id' , id);

    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get('http://localhost:8080/getCircularById',{headers: headers,params: param})
   }

   applyJob(circular: Circular): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.post('http://localhost:8080/applyJob',circular,{headers: headers, responseType: 'text'})
   }

   saveEvalution(evalution: Evalution): Observable<any>{
    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.post('http://localhost:8080/saveEvalution',evalution,{headers: headers, responseType: 'text'})
   }

   getEvalution(aId: string, cId: string): Observable<any>{
    let param = new HttpParams()
    .set('aId' , aId)
    .set('cId',cId);

    const headers = new HttpHeaders({
      authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
  });
      return this.http.get('http://localhost:8080/getEvalution',{headers: headers,params: param})
}

getSortedEvalution(cId: string): Observable<any>{
  let param = new HttpParams()
  .set('cId',cId);

  const headers = new HttpHeaders({
    authorization : 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
});
    return this.http.get('http://localhost:8080/getSortedEvalution',{headers: headers,params: param})
}

}


