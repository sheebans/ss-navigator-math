import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { AuthModel } from '../../models/auth';
import { SessionModel } from '../../models/session';
import { ENV } from '@app/env';
import { Storage } from '@ionic/storage';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/mergeMap';

/**
 *
 * This Lookups provider makes calls to our API at the default lookups endpoints.
 *
 */
@Injectable()
export class LookupsProvider {
  lookupsV1Namespace: string = 'api/nucleus/v1/lookups';

  headers: Promise<HttpHeaders>;

  constructor(private api: ApiProvider, private storage: Storage) {
    this.headers = this.storage.get('session').then(session => {
      console.log(
        new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Token ' + session.access_token
        })
      );
      return new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token ' + session.access_token
      });
    });
  }

  getCountries(): Observable<CountryModel[]> {
    const endpoint = `${this.lookupsV1Namespace}/countries`;
    return Observable.fromPromise(this.headers).mergeMap(headers => {
      const reqOpts = { headers: headers };
      return this.api.get<CountryModel[]>(endpoint, null, reqOpts).map(res => {
        return res.countries.map(
          (country): CountryModel => {
            const result: CountryModel = {
              id: country.id,
              name: country.name,
              code: country.code
            };
            return result;
          }
        );
      });
    });
  }

  getStates(countryId: string): Observable<StateModel[]> {
    const endpoint = `${this.lookupsV1Namespace}/countries/${countryId}/states`;
    return Observable.fromPromise(this.headers).mergeMap(headers => {
      const reqOpts = { headers: headers };
      return this.api.get<StateModel[]>(endpoint, null, reqOpts).map(res => {
        return res.states.map(
          (state): StateModel => {
            const result: StateModel = {
              id: state.id,
              name: state.name,
              code: state.code
            };
            return result;
          }
        );
      });
    });
  }

  getSchoolDistricts(stateId: string): Observable<SchoolDistrictModel[]> {
    const endpoint = `${this.lookupsV1Namespace}/school-districts`;
    return Observable.fromPromise(this.headers).mergeMap(headers => {
      const reqOpts = { headers: headers };
      const params = { state_id: stateId };
      return this.api
        .get<SchoolDistrictModel[]>(endpoint, params, reqOpts)
        .map(res => {
          return res['school-districts'].map(
            (schoolDistrict): SchoolDistrictModel => {
              const result: SchoolDistrictModel = {
                id: schoolDistrict.id,
                name: schoolDistrict.name,
                code: schoolDistrict.code
              };
              return result;
            }
          );
        });
    });
  }
}
