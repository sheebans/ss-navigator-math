import { CollectionSummary } from '@models/course-map/collection-summary';

export interface CoursePathModel {
  lesson_id: string;
  unit_id?: string;
  course_id?: string;
  title: string;
  created_at?: string;
  updated_at?: string;
  creator_id?: string;
  modifier_id?: string;
  owner_id?: string;
  original_creator_id?: string;
  original_lesson_id?: string;
  metadata?: any;
  taxonomy?: any;
  sequence_id: any;
  creator_system?: any;
  aggregated_taxonomy: Object;
  collection_summary: Array<CollectionSummary>;
}
