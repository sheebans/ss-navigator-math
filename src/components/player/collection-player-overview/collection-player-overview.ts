import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CollectionModel } from '@models/collection/collection';
import { UnitModel } from '@models/course/unit';
import { LessonModel } from '@models/course/lesson';
import { ContentModel } from '@models/content/content';

@Component({
  selector: 'collection-player-overview',
  templateUrl: 'collection-player-overview.html'
})
export class CollectionPlayerOverviewComponent {
  @Input() collection: CollectionModel;

  @Input() unit: UnitModel;

  @Input() lesson: LessonModel;

  @Output()
  onContentPlay: EventEmitter<{
    content: ContentModel;
    index: string;
  }> = new EventEmitter();

  constructor() {}

  playContent(content: ContentModel, index: number) {
    let data = {
      content: content,
      index: index
    };
    this.onContentPlay.emit(data);
  }
}
