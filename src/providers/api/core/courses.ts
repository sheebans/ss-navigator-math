import { Injectable } from '@angular/core';
import { RestClient } from '@providers/api/rest-client';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { CourseModel } from '@models/course/course';
import { UnitModel } from '@models/course/unit';
import { LessonModel } from '@models/course/lesson';
import { SessionModel } from '@models/auth/session';
import { Storage } from '@ionic/storage';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/mergeMap';

/**
 *
 * This Courses provider makes calls to our API at the Courses endpoints.
 *
 */
@Injectable()
export class CoursesProvider {
  coursesV1Namespace: string = 'api/nucleus/v1/courses';

  constructor(private restClient: RestClient, private storage: Storage) {}

  getCourse(courseId: string): Observable<CourseModel> {
    const endpoint = `${this.coursesV1Namespace}/${courseId}`;
    return Observable.fromPromise(this.getSession()).mergeMap(session => {
      const reqOpts = { headers: this.getTokenHeaders(session.access_token) };
      return this.restClient.get<CourseModel>(endpoint, null, reqOpts).map(
        (course): CourseModel => {
          const result: CourseModel = {
            id: course.id,
            title: course.title
          };
          return result;
        }
      );
    });
  }

  getUnit(courseId: string, unitId: string): Observable<UnitModel> {
    const endpoint = `${this.coursesV1Namespace}/${courseId}/units/${unitId}`;
    return Observable.fromPromise(this.getSession()).mergeMap(session => {
      const reqOpts = { headers: this.getTokenHeaders(session.access_token) };
      return this.restClient.get<UnitModel>(endpoint, null, reqOpts).map(
        (unit): UnitModel => {
          const result: UnitModel = {
            unit_id: unit.unit_id,
            course_id: unit.course_id,
            title: unit.title
          };
          return result;
        }
      );
    });
  }

  getLesson(
    courseId: string,
    unitId: string,
    lessonId: string
  ): Observable<LessonModel> {
    const endpoint = `${
      this.coursesV1Namespace
    }/${courseId}/units/${unitId}/lessons/${lessonId}`;
    return Observable.fromPromise(this.getSession()).mergeMap(session => {
      const reqOpts = { headers: this.getTokenHeaders(session.access_token) };
      return this.restClient.get<LessonModel>(endpoint, null, reqOpts).map(
        (lesson): LessonModel => {
          const result: LessonModel = {
            unit_id: lesson.unit_id,
            course_id: lesson.course_id,
            lesson_id: lesson.lesson_id,
            title: lesson.title
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
