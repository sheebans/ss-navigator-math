import { Injectable } from '@angular/core';
import { RestClient } from './rest-client';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import {
  CountryModel,
  StateModel,
  SchoolDistrictModel,
  SchoolModel
} from '../../models/lookups';
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

  constructor(private restClient: RestClient, private storage: Storage) {}

  getCountries(): Observable<CountryModel[]> {
    const endpoint = `${this.lookupsV1Namespace}/countries`;
    return Observable.fromPromise(this.getTokenHeaders()).mergeMap(headers => {
      const reqOpts = { headers: headers };
      return this.restClient
        .get<CountryModel[]>(endpoint, null, reqOpts)
        .map(res => {
          return res['countries'].map(
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
    return Observable.fromPromise(this.getTokenHeaders()).mergeMap(headers => {
      const reqOpts = { headers: headers };
      return this.restClient
        .get<StateModel[]>(endpoint, null, reqOpts)
        .map(res => {
          return res['states'].map(
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
    return Observable.fromPromise(this.getTokenHeaders()).mergeMap(headers => {
      const reqOpts = { headers: headers };
      const params = { state_id: stateId };
      return this.restClient
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

  getSchools(schoolDistrictId: string): Observable<SchoolModel[]> {
    const endpoint = `${this.lookupsV1Namespace}/schools`;
    return Observable.fromPromise(this.getTokenHeaders()).mergeMap(headers => {
      const reqOpts = { headers: headers };
      const params = { school_district_id: schoolDistrictId };
      return this.restClient
        .get<SchoolModel[]>(endpoint, params, reqOpts)
        .map(res => {
          return res['schools'].map(
            (school): SchoolModel => {
              const result: SchoolModel = {
                id: school.id,
                name: school.name,
                code: school.code
              };
              return result;
            }
          );
        });
    });
  }

  getTokenHeaders(): Promise<HttpHeaders> {
    return this.storage.get('session').then(session => {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token ' + session.access_token
      });
    });
  }
}
