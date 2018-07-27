import { Component, Input, OnInit } from '@angular/core';
import { ContentFormatComponent } from '@components/player/content-format.component';
import { ContentModel } from '@models/content/content';

@Component({
  selector: 'drag-and-drop-format',
  templateUrl: 'drag-and-drop-format.html'
})
export class DragAndDropFormatComponent
  implements ContentFormatComponent, OnInit {
  @Input() content: ContentModel;

  @Input() isActive: boolean;

  isReorder: boolean = false;

  constructor() {}

  ngOnInit() {}

  reorderAnswer(indexes) {
    this.isReorder = true;
    let element = this.content.answer[indexes.from];
    this.content.answer.splice(indexes.from, 1);
    this.content.answer.splice(indexes.to, 0, element);
  }
}
