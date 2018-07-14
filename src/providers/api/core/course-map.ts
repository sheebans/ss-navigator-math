import { Injectable } from '@angular/core';
import { RestClient } from '@providers/api/rest-client';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { CourseMapModel } from '@models/course-map/course-map';
import { SessionModel } from '@models/auth/session';
import { CollectionSummary } from '@models/course-map/collection-summary';
import { CoursePathModel } from '@models/course-map/course-path';
import { Storage } from '@ionic/storage';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/mergeMap';
import { DEFAULT_IMAGES } from '@app/config';

/**
 *
 * This Milstone provider makes calls to our API at the default milestone endpoints.
 *
 */
@Injectable()
export class CourseMapProvider {
  couseMapV1Namespace: string = 'api/nucleus/v1/course-map';

  session: any;

  constructor(private storage: Storage, private restClient: RestClient) {
    this.getSession().then(session => {
      this.session = session;
    });
  }

  getCourseMap(
    courseId,
    unitId,
    lessonId,
    classId
  ): Observable<CourseMapModel> {
    const endpoint = `${
      this.couseMapV1Namespace
    }/${courseId}/units/${unitId}/lessons/${lessonId}?classId=${classId}`;
    return Observable.fromPromise(this.getTokenHeaders()).mergeMap(headers => {
      const reqOpts = { headers: headers };
      return this.restClient.get<CourseMapModel>(endpoint, null, reqOpts).map(
        (course): CourseMapModel => {
          const result: CourseMapModel = {
            course_path: this.serializeCoursePathModel(course.course_path)
          };
          return result;
        }
      );
    });
  }

  serializeCoursePathModel(coursePath: any): CoursePathModel {
    const result: CoursePathModel = {
      lesson_id: coursePath.lesson_id,
      title: coursePath.title,
      sequence_id: coursePath.sequence_id,
      collection_summary: this.serializeCollectionSummaryModel(
        coursePath.collection_summary
      ),
      aggregated_taxonomy: coursePath.aggregated_taxonomy
    };
    return result;
  }

  serializeCollectionSummaryModel(
    collectionContent: any
  ): Array<CollectionSummary> {
    return collectionContent.map(
      (content): CollectionSummary => {
        const result: CollectionSummary = {
          id: content.id,
          title: content.title,
          thumbnail: content.thumbnail
            ? `https:${this.session.cdn_urls.content_cdn_url}${
                content.thumbnail
              }`
            : DEFAULT_IMAGES.COLLECTION,
          sequence_id: content.sequence_id,
          format: content.format
        };
        return result;
      }
    );
  }

  getTokenHeaders(): Promise<HttpHeaders> {
    return this.storage.get('session').then(session => {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token ' + session.access_token
      });
    });
  }

  getSession(): Promise<SessionModel> {
    return this.storage.get('session').then(session => {
      return session;
    });
  }
}
