import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs';

// rxjs
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
// import 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RequestDemoService {

  constructor(private jsonp: Jsonp) { }

  public request(param: string): Observable<any> {

    const params = new URLSearchParams();
    params.set('test', param);
    params.set('callback', 'JSONP_CALLBACK');


    //Angular6で書く
    return this.jsonp.get('hogehoge', {search: params}).map(

    );
  }

}
