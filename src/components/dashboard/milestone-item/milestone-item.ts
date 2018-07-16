import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'milestone-item',
  templateUrl: 'milestone-item.html'
})
export class MilestoneItemComponent {
  @Input() milestone: any;

  shownAccordion: any;

  locationSubscription: any;

  eventsSubject: Subject<Object> = new Subject<Object>();

  locationEvents: Subject<Object> = new Subject<Object>();

  @Input() location: Observable<Object>;

  constructor() {}

  ngOnInit() {
    this.locationSubscription = this.location.subscribe(userLocation => {
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
