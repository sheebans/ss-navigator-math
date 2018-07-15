import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'milestone',
  templateUrl: 'milestone.html'
})
export class MilestoneComponent {
  milestoneModel: any;

  shownAccordion: any;

  locationSubscription: any;

  eventsSubject: Subject<Object> = new Subject<Object>();

  locationEvents: Subject<Object> = new Subject<Object>();

  @Input() locationData: Observable<Object>;

  @Input()
  set milestoneData(milestoneModel: any) {
    this.milestoneModel = milestoneModel;
  }

  constructor() {}

  ngOnInit() {
    this.locationSubscription = this.locationData.subscribe(userLocation => {
      this.locationEvents.next(userLocation);
    });
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

  ngOnDestroy() {
    this.locationSubscription.unsubscribe();
  }
}
