import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestDemoService {

  constructor(private jsonp: Jsonp) { }

  public request(): Observable<any> {

    const params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');

    // Observableを返却
    return this.jsonp.get('https://connpass.com/api/v1/event/?keyword=python', {search: params}).pipe(

      // mapで取得したデータの処理をする
      map(response => response.json() || {}),

      // エラーが発生した時の処理をする
      catchError(error => Observable.throw(error.statusText))

    );
  }

}
