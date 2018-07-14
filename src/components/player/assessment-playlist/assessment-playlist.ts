import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Slides } from 'ionic-angular';
import { AssessmentModel } from '@models/assessment/assessment';
import { ContentModel } from '@models/content/content';

@Component({
  selector: 'assessment-playlist',
  templateUrl: 'assessment-playlist.html'
})
export class AssessmentPlaylistComponent implements OnInit {
  @ViewChild(Slides) slides: Slides;

  @Input() assessment: AssessmentModel;

  @Input() activePlayerIndex: number;

  contents: Array<ContentModel>;

  constructor() {}

  ngOnInit() {
    this.contents = this.assessment.question;
  }

  slideChanged() {
    this.activePlayerIndex = this.slides.getActiveIndex();
  }
}
