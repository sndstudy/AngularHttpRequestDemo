import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// import { toPromise } from 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class RequestDemoService {

  constructor(private http: HttpClient) { }

  public request(): Observable<any> {

    const option: object = {
      responseType: 'json',
      observe: 'response'
    };

    let result: any;

    // Promiseを返却
    return this.http.request('GET', 'http://localhost:3000', option).pipe(
      map(val => val),
      catchError(
        error => result = error
      )
    );
  }

}
