import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { ENV } from '@app/env';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class ApiProvider {
  url: string = ENV.API_END_POINT;

  constructor(public http: HttpClient) {}

  get(endpoint: string, params?: any, reqOpts?: any): Observable<{}> {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http
      .get(`${this.url}/${endpoint}`, reqOpts)
      .pipe(catchError(this.handleError));
  }

  post<T>(endpoint: string, body: any, reqOpts?: any): Observable<T> {
    console.log(`${this.url}/${endpoint}`);
    console.log(body);
    return this.http
      .post<T>(`${this.url}/${endpoint}`, body, reqOpts)
      .pipe(catchError(this.handleError));
  }

  put(endpoint: string, body: any, reqOpts?: any): Observable<{}> {
    return this.http
      .put(`${this.url}/${endpoint}`, body, reqOpts)
      .pipe(catchError(this.handleError));
  }

  delete(endpoint: string, reqOpts?: any): Observable<{}> {
    return this.http
      .delete(`${this.url}/${endpoint}`, reqOpts)
      .pipe(catchError(this.handleError));
  }

  patch(endpoint: string, body: any, reqOpts?: any): Observable<{}> {
    return this.http
      .patch(`${this.url}/${endpoint}`, body, reqOpts)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
