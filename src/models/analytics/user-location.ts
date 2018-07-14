import { LocationContent } from '@models/analytics/location-content';
export interface UserLocationModel {
  content: Array<LocationContent>;
  message?: any;
  paginate?: any;
}
