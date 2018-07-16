import { ContentModel } from '@models/content/content';

export interface AssessmentModel {
  id: string;
  title: string;
  owner_id: string;
  creator_id: string;
  original_creator_id: string;
  original_collection_id: string;
  thumbnail: string;
  learning_objective?: string;
  license?: string;
  metadata?: object;
  taxonomy?: object;
  setting?: object;
  grading?: any;
  visible_on_profile?: boolean;
  course_id?: string;
  unit_id?: string;
  lesson_id?: string;
  subformat?: string;
  question: Array<ContentModel>;
  collaborator: Array<string>;
}
