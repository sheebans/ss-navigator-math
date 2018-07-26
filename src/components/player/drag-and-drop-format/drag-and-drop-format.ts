import { Component, Input, OnInit } from '@angular/core';
import { ContentFormatComponent } from '@components/player/content-format.component';

@Component({
  selector: 'drag-and-drop-format',
  templateUrl: 'drag-and-drop-format.html'
})
export class DragAndDropFormatComponent
  implements ContentFormatComponent, OnInit {
  @Input() content: any;

  @Input() isActive: boolean;

  question: any;

  isReorder: boolean = false;

  constructor() {}

  ngOnInit() {}

  reorderAnswer(indexes) {
    this.isReorder = true;
    let element = this.question.answer[indexes.from];
    this.question.answer.splice(indexes.from, 1);
    this.question.answer.splice(indexes.to, 0, element);
  }
}
