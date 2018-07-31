import { Component, EventEmitter, Output } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { UnitModel } from '@models/course/unit';
import { LessonModel } from '@models/course/lesson';
import { ContentModel } from '@models/content/content';
import { AssessmentModel } from '@models/assessment/assessment';

/**
 * Generated class for the QuestionPlaylistPanelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'question-playlist-panel',
  templateUrl: 'question-playlist-panel.html'
})
export class QuestionPlaylistPanelComponent {
  assessment: AssessmentModel;

  content: ContentModel;

  unit: UnitModel;

  lesson: LessonModel;

  activePlayerIndex: number;

  isAssessmentPlayListPanelOpen: boolean = true;

  @Output()
  onContentPlay: EventEmitter<{
    content: ContentModel;
    index: number;
  }> = new EventEmitter();

  constructor(private params: NavParams) {}

  ngOnInit() {
    this.assessment = this.params.get('assessment');
    this.content = this.params.get('content');
    this.unit = this.params.get('unit');
    this.lesson = this.params.get('lesson');
    this.activePlayerIndex = this.params.get('activePlayerIndex');
  }

  playContent(content: ContentModel, index: number) {
    let data = {
      content: content,
      index: index
    };
    this.onContentPlay.emit(data);
  }
}
