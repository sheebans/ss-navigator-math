import { CollectionSummary } from '@models/course-map/collection-summary';
export interface UserLocationModel {
  id?: string;
  collectionId?: string;
  assessmentId?: string;
  unitId: string;
  lessonId: string;
  courseId?: string;
  classId?: string;
  collection?: Array<CollectionSummary>;
}
