import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Observable } from 'rxjs/Observable';
import { AuthModel } from '../../models/auth';
import { SessionModel } from '../../models/session';
import { ENV } from '@app/env';
import { Storage } from '@ionic/storage';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toPromise';
/**
 *
 * This Auth provider makes calls to our API at the `signin` and `signup` endpoints.
 *
 */
@Injectable()
export class AuthProvider {
  authNamespace: string = 'api/nucleus-auth';

  constructor(public api: ApiProvider, private storage: Storage) {}

  signInAsAnonymous(): Observable<SessionModel> {
    const postData: AuthModel = {
      client_id: ENV.CLIENT_ID,
      client_key: ENV.CLIENT_KEY,
      grant_type: 'anonymous'
    };
    const endpoint = `${this.authNamespace}/v2/signin`;
    return this.api.post<SessionModel>(endpoint, postData).map(res => {
      const result: SessionModel = {
        access_token: res.access_token,
        access_token_validity: res.access_token_validity,
        cdn_urls: res.cdn_urls,
        provided_at: res.provided_at,
        user_id: res.user_id
      };
      return result;
    });
  }

  signOut(): Observable<any> {
    return Observable.fromPromise(this.getHeaders()).mergeMap(headers => {
      const reqOpts = { headers: headers };
      const endpoint = `${this.authNamespace}/v2/signout`;
      return this.api.delete<any>(endpoint, reqOpts);
    });
  }

  getHeaders(): Promise<HttpHeaders> {
    return this.storage.get('session').then(session => {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token ' + session.access_token
      });
    });
  }
}
