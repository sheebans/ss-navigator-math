import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

/**
 *
 * This Auth provider makes calls to our API at the `signin` and `signup` endpoints.
 *
 */
@Injectable()
export class Auth {
  authEndpoint: string = 'rest/v2/all';

  constructor(public api: Api) {}

  getCountries(): Observable<{}> {
    return this.api.get(this.authEndpoint);
  }
}
