export interface LessonModel {
  lesson_id: string;
  unit_id: string;
  course_id: string;
  title: string;
  creator_id?: string;
  modifier_id?: string;
  owner_id?: string;
  original_creator_id?: string;
  original_lesson_id?: string;
  metadata?: Object;
  taxonomy?: Object;
  sequence_id?: number;
  aggregated_taxonomy?: Object;
  collection_summary?: Array<any>;
}
