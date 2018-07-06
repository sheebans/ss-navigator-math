import { ContentModel } from '../content/content';

export interface CollectionModel {
  id: string;
  title: string;
  owner_id: string;
  creator_id: string;
  original_creator_id: string;
  original_collection_id: string;
  thumbnail: string;
  learning_objective?: string;
  license?: string;
  metadata?: any;
  taxonomy?: any;
  setting?: {};
  grading?: any;
  visible_on_profile?: boolean;
  course_id?: string;
  unit_id?: string;
  lesson_id?: string;
  subformat?: string;
  content: Array<ContentModel>;
  collaborator: Array<string>;
}
