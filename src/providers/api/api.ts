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

  get<T>(endpoint: string, params?: any, reqOpts?: any): Observable<T> {
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
    return this.http
      .post<T>(`${this.url}/${endpoint}`, body, reqOpts)
      .pipe(catchError(this.handleError));
  }

  put<T>(endpoint: string, body: any, reqOpts?: any): Observable<T> {
    return this.http
      .put<T>(`${this.url}/${endpoint}`, body, reqOpts)
      .pipe(catchError(this.handleError));
  }

  delete<T>(endpoint: string, reqOpts?: any): Observable<T> {
    return this.http
      .delete<T>(`${this.url}/${endpoint}`, reqOpts)
      .pipe(catchError(this.handleError));
  }

  patch<T>(endpoint: string, body: any, reqOpts?: any): Observable<T> {
    return this.http
      .patch<T>(`${this.url}/${endpoint}`, body, reqOpts)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response | any) {
    return Observable.throw(error);
  }
}
