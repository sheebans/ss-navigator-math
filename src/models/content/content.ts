import { AnswerModel } from '@models/content/answer';
export interface ContentModel {
  id: string;
  title: string;
  url: string;
  creator_id: string;
  original_creator_id: string;
  content_format: string;
  content_subformat: string;
  answer: Array<AnswerModel>;
  metadata: any;
  narration: string;
  taxonomy: any;
  hint_explanation_detail: string;
  thumbnail?: string;
  sequence_id: number;
  is_copyright_owner?: boolean;
  visible_on_profile?: boolean;
  display_guide?: string;
  description?: string;
}
