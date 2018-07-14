import { Injectable } from '@angular/core';
import { RestClient } from './rest-client';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { SessionModel } from '@models/auth/session';
import { UserLocationModel } from '@models/analytics/user-location';
import { LocationContent } from '@models/analytics/location-content';
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
        .get<UserLocationModel>(endpoint, null, reqOpts)
        .map(
          (location): UserLocationModel => {
            const result: UserLocationModel = {
              content: this.serializeLocationContent(location.content)
            };
            return result;
          }
        );
    });
  }

  serializeLocationContent(locationContent: any): Array<LocationContent> {
    return locationContent.map(
      (content): LocationContent => {
        const result: LocationContent = {
          unitId: content.unitId,
          lessonId: content.lessonId,
          id: content.assessmentId ? content.assessmentId : content.collectionId
        };
        return result;
      }
    );
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
