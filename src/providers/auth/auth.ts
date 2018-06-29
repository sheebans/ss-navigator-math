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
import { Base64 } from '@ionic-native/base64';

/**
 *
 * This Auth provider makes calls to our API at the `signin` and `signup` endpoints.
 *
 */
@Injectable()
export class AuthProvider {
  authNamespace: string = 'api/nucleus-auth';

  constructor(
    private api: ApiProvider,
    private storage: Storage,
    private base64: Base64
  ) {}

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
    return Observable.fromPromise(this.getTokenHeaders()).mergeMap(headers => {
      const reqOpts = { headers: headers };
      const endpoint = `${this.authNamespace}/v2/signout`;
      return this.api.delete<any>(endpoint, reqOpts);
    });
  }

  signInWithCredential(): Observable<SessionModel> {
    const postData: AuthModel = {
      client_id: ENV.CLIENT_ID,
      client_key: ENV.CLIENT_KEY,
      grant_type: 'credential'
    };
    const endpoint = `${this.authNamespace}/v2/signin`;
    const token = '';
    return Observable.fromPromise(this.getBasicHeaders(token)).mergeMap(
      headers => {
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
    );
  }

  getBasicHeaders(token: string): Promise<HttpHeaders> {
    return this.base64.encodeFile(token).then(encodeToken => {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + encodeToken
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
