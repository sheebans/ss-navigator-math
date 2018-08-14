import { Component, ViewChild, Input } from '@angular/core';
import { Slides } from 'ionic-angular';
import { ContentModel } from '@models/content/content';
import { UnitModel } from '@models/course/unit';
import { LessonModel } from '@models/course/lesson';
import { AssessmentModel } from '@models/assessment/assessment';
import { PlayerEvent } from '@models/events/player-event';
import { PlayerEventService } from '@components/player/player-event.service';
@Component({
  selector: 'assessment-forward-navigation-playlist',
  templateUrl: 'assessment-forward-navigation-playlist.html',
  providers: [PlayerEventService]
})
export class AssessmentForwardNavigationPlaylistComponent {
  @ViewChild(Slides) slides: Slides;

  @Input() assessment: AssessmentModel;

  @Input() unit: UnitModel;

  @Input() lesson: LessonModel;

  @Input() activePlayerIndex: number;

  contents: Array<ContentModel>;

  isActive: boolean = false;

  isLastQuestion: boolean = false;

  isSelected: boolean = false;

  activeContent: ContentModel;

  activeSlide: PlayerEvent;

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

  ngAfterContentInit() {
    if (this.slides) {
      this.slides.lockSwipes(true);
    }
  }

  eventListen(event: any): void {
    this.isActive = event ? true : false;
  }

  submitAnswer() {
    this.isActive = false;
    this.slides.lockSwipes(false);
    this.slides.slideNext(1000);
    this.slides.lockSwipes(true);
  }

  slideChanged() {
    let activeIndex = this.slides.getActiveIndex();
    if (activeIndex <= this.contents.length - 1) {
      this.activePlayerIndex = activeIndex;
      this.activeContent = this.contents[this.activePlayerIndex];
    }
    this.isLastQuestion = this.contents.length - 1 === activeIndex;
  }

  submitAllAnswer() {
    this.showReport = true;
  }
}
