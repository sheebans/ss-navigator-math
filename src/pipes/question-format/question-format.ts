import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionFormat'
})
export class QuestionFormatPipe implements PipeTransform {
  private QUESTION_FORMAT_LIST: object = {
    true_false_question: 'True or False',
    multiple_choice_question: 'Multiple Choice',
    fill_in_the_blank_question: 'Fill In The Blank',
    multiple_answer_question: 'Multiple Answer',
    hot_text_reorder_question: 'Drag And Drop Order',
    hot_text_highlight_question: 'Highlight Text',
    hot_spot_image_question: 'Multiple Select - Image',
    hot_spot_text_question: 'Multiple Select - Text',
    open_ended_question: 'Free Response'
  };

  /**
   * Takes a question format and return the readable text format.
   */
  transform(value: string, ...args) {
    return this.QUESTION_FORMAT_LIST[value] || 'question';
  }
}
