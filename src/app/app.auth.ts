import { Injectable } from '@angular/core';
import { AuthProvider } from '../providers/auth/auth';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

@Injectable()
export class AppAuth {
  constructor(
    private authProvider: AuthProvider,
    private storage: Storage,
    private events: Events
  ) {}

  doAuthentication() {
    this.storage.clear().then(sessionModel => {
      this.authProvider
        .signInAsAnonymous()
        .subscribe(session => this.storage.set('session', session));
    });
  }

  clearStorageAndDoAuthentication() {
    this.storage.clear().then(() => {
      this.authProvider.signInAsAnonymous().subscribe(session => {
        this.storage.set('session', session);
        this.events.publish('auth:reAuthenticateDone');
      });
    });
  }
}
