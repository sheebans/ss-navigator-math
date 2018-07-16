import { Injectable } from '@angular/core';
import { RestClient } from '@providers/api/rest-client';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { CollectionModel } from '@models/collection/collection';
import { ContentModel } from '@models/content/content';
import { SessionModel } from '@models/auth/session';
import { Storage } from '@ionic/storage';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/mergeMap';
import { DEFAULT_IMAGES } from '@app/config';
/**
 *
 * This Collection provider makes calls to our API at the collection endpoints.
 *
 */
@Injectable()
export class CollectionProvider {
  collectionV1Namespace: string = 'api/nucleus/v1/collections';

  private contentFormatExtension: Array<string> = [
    '.jpg',
    '.jpeg',
    '.gif',
    '.png',
    '.pdf'
  ];

  constructor(private restClient: RestClient, private storage: Storage) {}

  getCollection(collectionId: string): Observable<CollectionModel> {
    const endpoint = `${this.collectionV1Namespace}/${collectionId}`;
    return Observable.fromPromise(this.getSession()).mergeMap(session => {
      const reqOpts = { headers: this.getTokenHeaders(session.access_token) };
      return this.restClient.get<CollectionModel>(endpoint, null, reqOpts).map(
        (collection): CollectionModel => {
          const result: CollectionModel = {
            id: collection.id,
            title: collection.title,
            owner_id: collection.owner_id,
            creator_id: collection.creator_id,
            original_creator_id: collection.original_creator_id,
            original_collection_id: collection.original_collection_id,
            thumbnail: collection.thumbnail
              ? `https:${session.cdn_urls.content_cdn_url}${
                  collection.thumbnail
                }`
              : DEFAULT_IMAGES.COLLECTION,
            learning_objective: collection.learning_objective,
            license: collection.license,
            metadata: collection.metadata,
            taxonomy: collection.taxonomy,
            setting: collection.setting,
            grading: collection.grading,
            visible_on_profile: collection.visible_on_profile,
            course_id: collection.course_id,
            unit_id: collection.unit_id,
            lesson_id: collection.lesson_id,
            subformat: collection.subformat,
            content: this.serializeContentModel(collection.content, session),
            collaborator: collection.collaborator
          };
          return result;
        }
      );
    });
  }

  serializeContentModel(
    collectionContent: any,
    session: SessionModel
  ): Array<ContentModel> {
    return collectionContent.map(
      (content): ContentModel => {
        const result: ContentModel = {
          id: content.id,
          title: content.title,
          url: this.generateUrl(content.url, session.cdn_urls.content_cdn_url),
          creator_id: content.creator_id,
          original_creator_id: content.original_creator_id,
          content_format: content.content_format,
          content_subformat: content.content_subformat,
          answer: content.answer,
          metadata: content.metadata,
          narration: content.narration,
          taxonomy: content.taxonomy,
          hint_explanation_detail: content.hint_explanation_detail,
          thumbnail: content.thumbnail,
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

  generateUrl(url: string, content_cdn_url: string): string {
    if (url) {
      if (url.startsWith('//')) {
        url = `https:${url}`;
      } else if (!url.startsWith('http://') && !url.startsWith('https://')) {
        let extension = this.getUrlExtension(url);
        if (this.contentFormatExtension.indexOf(extension) > -1) {
          url = `https:${content_cdn_url}${url}`;
        } else {
          url = `http://${url}`;
        }
      }
    }
    return url;
  }

  getUrlExtension(url: string): string {
    return (url = url.substr(1 + url.lastIndexOf('/')).split('?')[0])
      .split('#')[0]
      .substr(url.lastIndexOf('.'));
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
