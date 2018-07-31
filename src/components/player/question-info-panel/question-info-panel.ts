import { Component, Input } from '@angular/core';
import { AssessmentModel } from '@models/assessment/assessment';
import { UnitModel } from '@models/course/unit';
import { LessonModel } from '@models/course/lesson';
import { ContentModel } from '@models/content/content';
import { ModalService } from '@providers/util/modal.service';
import { QuestionPlaylistPanelComponent } from '@components/player/question-playlist-panel/question-playlist-panel';

@Component({
  selector: 'question-info-panel',
  templateUrl: 'question-info-panel.html'
})
export class QuestionInfoPanelComponent {
  @Input() assessment: AssessmentModel;

  @Input() content: ContentModel;

  @Input() unit: UnitModel;

  @Input() lesson: LessonModel;

  @Input() activePlayerIndex: number;

  @Input() isAssessmentPlayListPanelOpen: boolean;

  constructor(private modalService: ModalService) {}

  openAssessmentPlaylistPanel() {
    let data = {
      assessment: this.assessment,
      content: this.content,
      unit: this.unit,
      lesson: this.lesson,
      activePlayerIndex: this.activePlayerIndex,
      isAssessmentPlayListPanelOpen: true
    };
    this.modalService.presentModal(QuestionPlaylistPanelComponent, data, {
      cssClass: 'inset-modal'
    });
  }

  closeAssessmentPlaylistPanel() {
    this.modalService.dismiss();
  }
}
