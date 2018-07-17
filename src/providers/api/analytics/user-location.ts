import { Injectable } from '@angular/core';
import { RestClient } from '@providers/api/rest-client';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { SessionModel } from '@models/auth/session';
import { UserLocationModel } from '@models/analytics/user-location';
import { Storage } from '@ionic/storage';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/mergeMap';

/**
 *
 * This Courses provider makes calls to our API at the Courses endpoints.
 *
 */
@Injectable()
export class UserLocationProvider {
  coursesV1Namespace: string = 'api/nucleus-insights/v2/class';

  constructor(private restClient: RestClient, private storage: Storage) {}

  getLocation(classId: string): Observable<UserLocationModel> {
    return Observable.fromPromise(this.getSession()).mergeMap(session => {
      const endpoint = `${this.coursesV1Namespace}/${classId}/user/${
        session.user_id
      }/current/location`;
      const reqOpts = { headers: this.getTokenHeaders(session.access_token) };
      return this.restClient
        .get<{ content: Array<UserLocationModel> }>(endpoint, null, reqOpts)
        .map(res => {
          let location = res.content[0];
          const result: UserLocationModel = {
            unitId: location.unitId,
            lessonId: location.lessonId,
            id: location.assessmentId
              ? location.assessmentId
              : location.collectionId
          };
          return result;
        });
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
