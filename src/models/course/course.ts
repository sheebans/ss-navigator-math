export interface CourseModel {
  id: string;
  title: string;
  description?: string;
  owner_id?: string;
  creator_id?: string;
  original_creator_id?: string;
  modifier_id?: string;
  original_course_id?: string;
  publish_status?: string;
  thumbnail?: string;
  metadata?: Object;
  taxonomy?: Object;
  collaborator?: Array<string>;
  visible_on_profile?: boolean;
  subject_bucket?: string;
  creator_system?: string;
  use_case?: string;
  version?: string;
  aggregated_taxonomy?: Object;
  unit_summary?: any;
}
