import { Component, Input } from '@angular/core';
import { ContentModel } from '@models/content/content';
import { UnitModel } from '@models/course/unit';
import { AssessmentModel } from '@models/assessment/assessment';
import { LessonModel } from '@models/course/lesson';

@Component({
  selector: 'assessment-bidirectional-playlist',
  templateUrl: 'assessment-bidirectional-playlist.html'
})
export class AssessmentBidirectionalPlaylistComponent {
  @Input() assessment: AssessmentModel;

  @Input() unit: UnitModel;

  @Input() lesson: LessonModel;

  @Input() activePlayerIndex: number;

  activeContent: ContentModel;

  contents: Array<ContentModel>;

  constructor() {}

  ngOnInit() {
    this.contents = this.assessment.question;
    this.activeContent = this.contents[this.activePlayerIndex];
  }
}
