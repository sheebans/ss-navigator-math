import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { ContentFormatComponent } from '@components/player/content-format.component';
import { ContentModel } from '@models/content/content';
import { PlayerEventService } from '@components/player/player-event.service';

@Component({
  selector: 'drag-and-drop-format',
  templateUrl: 'drag-and-drop-format.html',
  providers: [PlayerEventService]
})
export class DragAndDropFormatComponent
  implements ContentFormatComponent, OnInit {
  @Input() content: ContentModel;

  @Input() isActive: boolean;

  isReorder: boolean = false;

  @HostBinding('class')
  get hostClasses(): string {
    return this.isReorder ? 'answer-reorder' : 'default';
  }

  constructor() {}

  ngOnInit() {}

  reorderAnswer(indexes) {
    this.isReorder = true;
    let element = this.content.answer[indexes.from];
    this.content.answer.splice(indexes.from, 1);
    this.content.answer.splice(indexes.to, 0, element);
  }
}
