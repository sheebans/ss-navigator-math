import { Component, Input, EventEmitter, Output } from '@angular/core';
import { AssessmentModel } from '@models/assessment/assessment';
import { UnitModel } from '@models/course/unit';
import { LessonModel } from '@models/course/lesson';
import { ContentModel } from '@models/content/content';

@Component({
  selector: 'assessment-player-overview',
  templateUrl: 'assessment-player-overview.html'
})
export class AssessmentPlayerOverviewComponent {
  @Input() assessment: AssessmentModel;

  @Input() unit: UnitModel;

  @Input() lesson: LessonModel;

  @Output()
  onContentPlay: EventEmitter<{
    content: ContentModel;
    index: number;
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
