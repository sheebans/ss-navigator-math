import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Generated class for the MilestoneCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'milestone-card',
  templateUrl: 'milestone-card.html'
})
export class MilestoneCardComponent {
  milestoneModel: any;

  shownAccordion: any;

  private eventsSubject: Subject<Object> = new Subject<Object>();

  constructor() {}

  @Input()
  set data(milestoneModel: any) {
    this.milestoneModel = milestoneModel;
  }

  receiveEvent($event) {
    if (this.isShown($event)) {
      this.shownAccordion = null;
    } else {
      this.shownAccordion = $event;
    }
    this.eventsSubject.next(this.shownAccordion);
  }

  isShown(data) {
    return this.shownAccordion === data;
  }
}
