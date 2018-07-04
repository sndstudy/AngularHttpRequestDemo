import { Injectable } from '@angular/core';
// import { Http, URLSearchParams} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestDemoService {

  constructor(private http: HttpClient) { }

  public request(): Observable<any> {

    const params = new URLSearchParams();

    // Observableを返却
    return this.http.get('http://localhost:3000').pipe(

      // mapで取得したデータの処理をする
      map(response => response || {}),

      // エラーが発生した時の処理をする
      catchError(error => Observable.throw(error.statusText))

    );
  }

}
