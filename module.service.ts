import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import {module}  from './modcontent/module';

@Injectable()
export class ModuleService {

  headers:Headers;
  options:RequestOptions;

  constructor(private http:Http) { 
    this.headers = new Headers({ 'Content-Type': 'application/json', 
    'Accept': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
 
  }

  getModule(param:string):Observable<module>{
    let url=
    "http://localhost:8899/rest-api/modules/"+param;
    return this.http.get(url)
        .map(this.extractData)
        .catch(this.handleError);

  }

  private extractData(res: Response) {
    
    let body = res.json();
    body.topic.sort((x,y)=>
    x.topic_id>y.topic_id?1:y.topic_id>x.topic_id?-1:0);
    for(let x in body.topic)
      {
        body.topic[x].expand='minus';
        body.topic[x].status=true;
        body.topic[x].subTopic.sort((x,y)=>
        x.sub_topic_id>y.sub_topic_id?1:y.sub_topic_id>x.sub_topic_id?-1:0);
      }
    return body || {};
}

private handleError(error: any) {
    let errMsg = (error.message) ? error.message :'Server error';

    return Observable.throw(errMsg);

}

}
