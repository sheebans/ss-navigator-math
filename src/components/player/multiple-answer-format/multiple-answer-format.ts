import { Component, Input, OnInit } from '@angular/core';
import { ContentFormatComponent } from '@components/player/content-format.component';

@Component({
  selector: 'multiple-answer-format',
  templateUrl: 'multiple-answer-format.html'
})
export class MultipleAnswerFormatComponent
  implements ContentFormatComponent, OnInit {
  @Input() content: any;

  @Input() isActive: boolean;

  selectedAnswer: Array<object> = [];

  answerSelected: boolean = false;

  constructor() {}

  ngOnInit() {}

  selectAnswer(answer: object): void {
    this.selectedAnswer.push(answer);
    this.answerSelected =
      this.selectedAnswer >= this.content.answer ? true : false;
  }
}
