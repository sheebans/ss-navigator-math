export interface UnitModel {
  unit_id: string;
  course_id: string;
  title: string;
  owner_id?: string;
  creator_id?: string;
  modifier_id?: string;
  original_creator_id?: string;
  original_unit_id?: string;
  big_ideas?: string;
  essential_questions?: string;
  metadata?: Object;
  taxonomy?: Object;
  sequence_id?: number;
  creator_system?: string;
  aggregated_taxonomy?: Object;
  lesson_summary?: Array<any>;
}
