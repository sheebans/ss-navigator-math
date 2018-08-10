import { Component, Input } from '@angular/core';
import { ContentModel } from '@models/content/content';
import { UnitModel } from '@models/course/unit';
import { AssessmentModel } from '@models/assessment/assessment';
import { LessonModel } from '@models/course/lesson';
import { PlayerEventService } from '@components/player/player-event.service';

@Component({
  selector: 'assessment-bidirectional-playlist',
  templateUrl: 'assessment-bidirectional-playlist.html',
  providers: [PlayerEventService]
})
export class AssessmentBidirectionalPlaylistComponent {
  @Input() assessment: AssessmentModel;

  @Input() unit: UnitModel;

  @Input() lesson: LessonModel;

  @Input() activePlayerIndex: number;

  activeContent: ContentModel;

  contents: Array<ContentModel>;

  isActive: boolean = false;

  showReport: boolean = false;

  constructor(public playerEventService: PlayerEventService) {}

  ngOnInit() {
    this.contents = this.assessment.question;
    this.activeContent = this.contents[this.activePlayerIndex];
    this.playerEventService
      .getEventByContentId(this.activeContent.id)
      .subscribe(events => {
        this.eventListen(events);
      });
  }

  eventListen(event: any): void {
    this.isActive = event ? true : false;
  }

  submitAllAnswer() {
    this.showReport = true;
  }
}
