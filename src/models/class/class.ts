export interface ClassModel {
  id: string;
  creator_id?: string;
  title: string;
  description?: string;
  greeting?: string;
  grade?: any;
  class_sharing?: string;
  cover_image?: string;
  code?: string;
  min_score?: number;
  end_date?: string;
  course_id?: string;
  gooru_version?: number;
  content_visibility?: string;
  setting?: Object;
  member_count?: number;
}
