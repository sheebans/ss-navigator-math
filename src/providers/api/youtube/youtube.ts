import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { ENV } from '@app/env';
import { YoutubeModel } from '@models/app/youtube';

@Injectable()
export class YouTubeProvider {
  API_KEY: string = ENV.YOUTUBE_API_KEY;

  url: string = 'https://www.googleapis.com/youtube/v3/videos';

  constructor(public http: HttpClient) {}

  getYoutubeVideoById(id: string): Observable<YoutubeModel> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set('key', this.API_KEY);
    httpParams = httpParams.set('id', id);
    httpParams = httpParams.set(
      'fields',
      'items(id,snippet(title,categoryId, thumbnails))'
    );
    httpParams = httpParams.set('part', 'snippet');
    return this.http
      .get<YoutubeModel>(this.url, { params: httpParams })
      .pipe(catchError(this.handleError))
      .map(res => {
        let item = res.items[0];
        let result: YoutubeModel = {
          id: item.id,
          title: item.snippet.title,
          image_url: item.snippet.thumbnails.standard.url
        };
        return result;
      });
  }

  private handleError(error: Response | any) {
    return Observable.throw(error);
  }
}
