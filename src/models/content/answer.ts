export interface AnswerModel {
  answer_text: string;
  answer_type: string;
  is_correct: number;
  highlight_type?: string;
  sequence_id: number;
}
