import { Injectable } from '@angular/core';
import { PlayerEvent } from '@models/events/player-event';
import { Events } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Storage } from '@ionic/storage';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class PlayerEventService {
  playerEvents: Array<PlayerEvent> = [];

  constructor(private events: Events, private storage: Storage) {}

  publishEvent(playerEvent: PlayerEvent): void {
    this.getPlayerEvent().subscribe(playerEvents => {
      playerEvents.push(playerEvent);
      this.setPlayerEvent(playerEvents);
      this.events.publish('player:activities', playerEvents);
    });
  }

  getPlayerEvent(): Observable<PlayerEvent[]> {
    const subject = new Subject<PlayerEvent[]>();
    this.storage.get('events').then(events => {
      subject.next(events ? events : this.playerEvents);
    });
    return subject.asObservable();
  }

  setPlayerEvent(playerEvents: Array<PlayerEvent>): void {
    this.storage.set('events', playerEvents);
  }

  getEventByContentId(contentId: string): Observable<PlayerEvent> {
    const subject = new Subject<PlayerEvent>();
    this.events.subscribe('player:activities', events => {
      let contentEvent = events.find(event => {
        return event.contentId === contentId;
      });
      subject.next(contentEvent);
    });
    return subject.asObservable();
  }

  // isExists(playerEvents: Array<PlayerEvent>, event: PlayerEvent): boolean {
  //   return playerEvents.filter(playerEvent =>
  //     playerEvent.contentId == event.contentId).length == 0 ? false : true;
  // }
}
