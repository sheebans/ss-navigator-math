import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Slides } from 'ionic-angular';
import { AssessmentModel } from '@models/assessment/assessment';
import { UnitModel } from '@models/course/unit';
import { LessonModel } from '@models/course/lesson';
import { ContentModel } from '@models/content/content';

@Component({
  selector: 'assessment-playlist',
  templateUrl: 'assessment-playlist.html'
})
export class AssessmentPlaylistComponent implements OnInit {
  @ViewChild(Slides) slides: Slides;

  @Input() assessment: AssessmentModel;

  @Input() unit: UnitModel;

  @Input() lesson: LessonModel;

  activeContent: ContentModel;

  @Input() activePlayerIndex: number;

  contents: Array<ContentModel>;

  constructor() {}

  ngOnInit() {
    this.contents = this.assessment.question;
    this.activeContent = this.contents[this.activePlayerIndex];
  }

  slideChanged() {
    let activeIndex = this.slides.getActiveIndex();
    if (activeIndex <= this.contents.length - 1) {
      this.activePlayerIndex = activeIndex;
      this.activeContent = this.contents[this.activePlayerIndex];
    }
  }
}
