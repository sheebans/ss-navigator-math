import { Injectable } from '@angular/core';
import { RestClient } from '@providers/api/rest-client';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { AssessmentModel } from '@models/assessment/assessment';
import { ContentModel } from '@models/content/content';
import { SessionModel } from '@models/auth/session';
import { Storage } from '@ionic/storage';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/mergeMap';
import { DEFAULT_IMAGES } from '@app/config';

/**
 *
 * This Assessment provider makes calls to our API at the assessment endpoints.
 *
 */

@Injectable()
export class AssessmentProvider {
  assessmentV1Namespace: string = 'api/nucleus/v1/assessments';

  constructor(private restClient: RestClient, private storage: Storage) {}

  getAssessment(assessmentId: string): Observable<AssessmentModel> {
    const endpoint = `${this.assessmentV1Namespace}/${assessmentId}`;
    return Observable.fromPromise(this.getSession()).mergeMap(session => {
      const reqOpts = { headers: this.getTokenHeaders(session.access_token) };
      return this.restClient.get<AssessmentModel>(endpoint, null, reqOpts).map(
        (assessment): AssessmentModel => {
          const result: AssessmentModel = {
            id: assessment.id,
            title: assessment.title,
            owner_id: assessment.owner_id,
            creator_id: assessment.creator_id,
            original_creator_id: assessment.original_creator_id,
            original_collection_id: assessment.original_collection_id,
            thumbnail: assessment.thumbnail
              ? `https:${session.cdn_urls.content_cdn_url}${
                  assessment.thumbnail
                }`
              : DEFAULT_IMAGES.ASSESSMENT,
            learning_objective: assessment.learning_objective,
            license: assessment.license,
            metadata: assessment.metadata,
            taxonomy: assessment.taxonomy,
            setting: assessment.setting,
            grading: assessment.grading,
            visible_on_profile: assessment.visible_on_profile,
            course_id: assessment.course_id,
            unit_id: assessment.unit_id,
            lesson_id: assessment.lesson_id,
            subformat: assessment.subformat,
            question: this.serializeContentModel(assessment.question, session),
            collaborator: assessment.collaborator
          };
          return result;
        }
      );
    });
  }

  serializeContentModel(
    assessmentContent: any,
    session: SessionModel
  ): Array<ContentModel> {
    return assessmentContent.map(
      (content): ContentModel => {
        const result: ContentModel = {
          id: content.id,
          title: content.title,
          url: content.url,
          creator_id: content.creator_id,
          original_creator_id: content.original_creator_id,
          content_format: content.content_format,
          content_subformat: content.content_subformat,
          answer: content.answer,
          metadata: content.metadata,
          narration: content.narration,
          taxonomy: content.taxonomy,
          hint_explanation_detail: content.hint_explanation_detail,
          thumbnail: content.thumbnail
            ? `https:${session.cdn_urls.content_cdn_url}${content.thumbnail}`
            : null,
          sequence_id: content.sequence_id,
          is_copyright_owner: content.is_copyright_owner,
          visible_on_profile: content.visible_on_profile,
          display_guide: content.display_guide,
          description: content.description
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
