import { Component, ViewChild, Input } from '@angular/core';
import { Slides } from 'ionic-angular';
import { ContentModel } from '@models/content/content';
import { UnitModel } from '@models/course/unit';
import { LessonModel } from '@models/course/lesson';
import { AssessmentModel } from '@models/assessment/assessment';
import { PlayerEvent } from '@models/events/player-event';
import { PlayerEventService } from '@components/player/player-event.service';

/**
 * Generated class for the AssessmentForwardNavigationPlayerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
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

  isSelected: boolean = false;

  activeContent: ContentModel;

  activeSlide: PlayerEvent;

  attempt: any = {};

  constructor(private playerEventService: PlayerEventService) {}

  ngOnInit() {
    this.slides.lockSwipes(true);
    this.attempt = { count: this.assessment.setting.attempts_allowed };
    this.contents = this.assessment.question;
    this.activeContent = this.contents[this.activePlayerIndex];
    this.playerEventService.getEvents().subscribe(events => {
      this.eventListen(events);
    });
  }

  eventListen(events: any): void {
    this.activeSlide = events[this.activePlayerIndex];
    if (this.activeContent && this.activeSlide) {
      this.isActive =
        this.activeContent.id == this.activeSlide.contentId ? true : false;
    }
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
  }
}
