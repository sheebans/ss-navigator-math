import { Injectable } from '@angular/core';
import { RestClient } from '@providers/api/rest-client';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { ClassModel } from '@models/class/class';
import { SessionModel } from '@models/auth/session';
import { Storage } from '@ionic/storage';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/mergeMap';

/**
 *
 * This Classes provider makes calls to our API at the Classes endpoints.
 *
 */
@Injectable()
export class ClassesProvider {
  classesV1Namespace: string = 'api/nucleus/v1/classes';

  constructor(private restClient: RestClient, private storage: Storage) {}

  getClass(classId: string): Observable<ClassModel> {
    const endpoint = `${this.classesV1Namespace}/${classId}`;
    return Observable.fromPromise(this.getSession()).mergeMap(session => {
      const reqOpts = { headers: this.getTokenHeaders(session.access_token) };
      return this.restClient.get<ClassModel>(endpoint, null, reqOpts).map(
        (classes): ClassModel => {
          const result: ClassModel = {
            id: classes.id,
            course_id: classes.course_id,
            title: classes.title
          };
          return result;
        }
      );
    });
  }

  getTokenHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Token ' + token
    });
  }

  getSession(): Promise<SessionModel> {
    return this.storage.get('session').then(session => {
      return session;
    });
  }
}
