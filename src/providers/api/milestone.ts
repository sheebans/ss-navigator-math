import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/observable/fromPromise';
import { Storage } from '@ionic/storage';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/mergeMap';

/**
 *
 * This Milstone provider makes calls to our API at the default milestone endpoints.
 *
 */
@Injectable()
export class MilestoneProvider {
  milestoneV1Namespace: string = 'api/nucleus/v1/milestone';

  constructor(private storage: Storage, private _http: Http) {}

  getMileStones(): Observable<any> {
    const endpoint = 'assets/stub/milestone.api.json';
    return Observable.fromPromise(this.getTokenHeaders()).mergeMap(headers => {
      // const reqOpts = { headers: headers };
      return this._http.get(endpoint).map(res => {
        return res.json();
      });
    });
  }

  getTokenHeaders(): Promise<HttpHeaders> {
    return this.storage.get('session').then(session => {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token ' + session.access_token
      });
    });
  }
}
