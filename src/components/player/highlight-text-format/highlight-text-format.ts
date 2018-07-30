import { Component, Input, OnInit } from '@angular/core';
import { ContentFormatComponent } from '@components/player/content-format.component';
import { ContentModel } from '@models/content/content';
import { AnswerModel } from '@models/content/answer';

@Component({
  selector: 'highlight-text-format',
  templateUrl: 'highlight-text-format.html'
})
export class HighlightTextFormatComponent
  implements ContentFormatComponent, OnInit {
  @Input() content: ContentModel;

  @Input() isActive: boolean;

  answers: Array<object> = [];

  HIGHLIGHT_TYPE: string = 'word';

  answerSelected: boolean = false;

  BRACKET_REGEX = {
    global: /\[([^[]*)\]/g
  };

  constructor() {}

  ngOnInit() {
    this.splitAnswer(this.content.answer);
  }

  splitAnswer(answers: Array<AnswerModel>): void {
    answers.map(answer => {
      this.answers =
        answer.highlight_type == this.HIGHLIGHT_TYPE
          ? this.getWordItems(answer)
          : this.getSentenceItems(answer);
    });
  }

  getWordItems(answer: AnswerModel): Array<object> {
    const util = this,
      words = answer.answer_text.split(' ');
    return util.toItems(words);
  }

  getSentenceItems(answer: AnswerModel): Array<object> {
    const util = this,
      regex = /(\[.*?\.])/gm,
      items = answer.answer_text.split(regex);

    let result = [];
    items.forEach(function(item) {
      if (!regex.exec(item)) {
        // split consecutive non correct sentences
        result = result.concat(item.replace(/\. /gm, '.@').split('@'));
      } else {
        result.push(item);
      }
    });
    return util.toItems(result);
  }

  toItems(textList: Array<string>): Array<object> {
    textList = textList.filter(function(text) {
      let trimmed = text.trim();
      return trimmed || trimmed.length;
    });

    return textList.map(function(text, index) {
      let correct = text.indexOf('[') >= 0 && text.indexOf(']') > 0;
      return {
        index: index,
        text: text
          .replace('[', '')
          .replace(']', '')
          .trim(),
        selected: false,
        correct: correct
      };
    });
  }

  answerSelect(answer: any): void {
    this.answerSelected = true;
    answer.selected = !answer.selected;
  }
}
