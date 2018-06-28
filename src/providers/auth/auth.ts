import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { AuthModel } from '../../models/auth';
import { SessionModel } from '../../models/session';

/**
 *
 * This Auth provider makes calls to our API at the `signin` and `signup` endpoints.
 *
 */
@Injectable()
export class AuthProvider {
  authNamespace: string = 'api/nucleus-auth';

  constructor(public api: ApiProvider) {}

  signInAsAnonymous(): Observable<SessionModel> {
    const postData: AuthModel = {
      client_id: 'ba956a97-ae15-11e5-a302-f8a963065976',
      client_key: 'c2hlZWJhbkBnb29ydWxlYXJuaW5nLm9yZw==',
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
}
