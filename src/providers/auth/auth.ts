import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Observable } from 'rxjs/Observable';
import { SessionModel } from '../../models/auth/session';
import { InitLoginModel } from '../../models/auth/init-login';
import { ENV } from '@app/env';
import { Storage } from '@ionic/storage';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toPromise';
import { Base64 } from '@ionic-native/base64';
import { Platform } from 'ionic-angular';

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
    private base64: Base64,
    private platform: Platform
  ) {}

  signInAsAnonymous(): Observable<SessionModel> {
    const postData = {
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

  signInWithCredential(
    usernameOrEmail: string,
    password: string
  ): Observable<SessionModel> {
    const postData = {
      client_id: ENV.CLIENT_ID,
      client_key: ENV.CLIENT_KEY,
      grant_type: 'credential'
    };
    const endpoint = `${this.authNamespace}/v2/signin`;
    const token = `${usernameOrEmail}:${password}`;
    return Observable.fromPromise(this.getBasicHeaders(token)).mergeMap(
      headers => {
        const reqOpts = { headers: headers };
        return this.api
          .post<SessionModel>(endpoint, postData, reqOpts)
          .map(res => {
            const result: SessionModel = {
              access_token: res.access_token,
              access_token_validity: res.access_token_validity,
              cdn_urls: res.cdn_urls,
              provided_at: res.provided_at,
              user_id: res.user_id,
              username: res.username,
              email: res.email,
              first_name: res.first_name,
              last_name: res.last_name,
              user_category: res.user_category,
              thumbnail: res.thumbnail
            };
            return result;
          });
      }
    );
  }

  signInWithToken(token: string): Observable<SessionModel> {
    const endpoint = `${this.authNamespace}/v2/token`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + token
    });
    const reqOpts = { headers: headers };
    return this.api.get<SessionModel>(endpoint, null, reqOpts).map(res => {
      const result: SessionModel = {
        access_token: token,
        access_token_validity: res.access_token_validity,
        cdn_urls: res.cdn_urls,
        provided_at: res.provided_at,
        user_id: res.user_id,
        username: res.username,
        email: res.email,
        first_name: res.first_name,
        last_name: res.last_name,
        user_category: res.user_category,
        thumbnail: res.thumbnail
      };
      return result;
    });
  }

  initLogin(classCode: string): Observable<InitLoginModel> {
    const postData = {
      class_code: classCode,
      app_id: ENV.APP_ID,
      context_url: ENV.APP_SSO_REDIRECT_URL
    };
    const endpoint = `${this.authNamespace}/v2/initlogin`;
    return Observable.fromPromise(this.getTokenHeaders()).mergeMap(headers => {
      const reqOpts = { headers: headers };
      return this.api
        .post<InitLoginModel>(endpoint, postData, reqOpts)
        .map(res => {
          const result: InitLoginModel = {
            redirect_url: res.redirect_url,
            status_code: res.status_code
          };
          return result;
        });
    });
  }

  authorize(user: object): Observable<SessionModel> {
    const postData = {
      client_id: ENV.CLIENT_ID,
      client_key: ENV.CLIENT_KEY,
      grant_type: 'google',
      user: user
    };
    const endpoint = `${this.authNamespace}/v2/authorize`;
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

  getBasicHeaders(token: string): Promise<HttpHeaders> {
    if (this.platform.is('cordova')) {
      return this.base64.encodeFile(token).then(encodeToken => {
        return new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + encodeToken
        });
      });
    } else {
      return new Promise(resolve => {
        resolve(
          new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + window.btoa(token)
          })
        );
      });
    }
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
