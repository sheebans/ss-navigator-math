import { Injectable } from '@angular/core';
import { AuthProvider } from '@providers/api/auth/auth';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

@Injectable()
export class AuthService {
  constructor(
    private authProvider: AuthProvider,
    private storage: Storage,
    private events: Events
  ) {}

  doAuthentication() {
    this.storage.get('session').then(sessionModel => {
      if (sessionModel == null) {
        this.authProvider.signInAsAnonymous().subscribe(session => {
          this.storage.set('session', session);
          this.events.publish('auth:initializeAuthCompleted', session);
        });
      } else {
        this.authProvider.signInWithToken(sessionModel.access_token).subscribe(
          session => {
            this.events.publish('auth:initializeAuthCompleted', session);
          },
          onerror => {
            this.authProvider.signInAsAnonymous().subscribe(session => {
              this.storage.set('session', session);
              this.events.publish('auth:initializeAuthCompleted', session);
            });
          }
        );
      }
    });
  }

  clearStorageAndDoAuthentication() {
    this.storage.clear().then(() => {
      this.authProvider.signInAsAnonymous().subscribe(session => {
        this.storage.set('session', session);
        this.events.publish('auth:reAuthenticateDone', session);
      });
    });
  }

  logout() {
    this.authProvider.signOut().subscribe(() => {
      this.clearStorageAndDoAuthentication();
    });
  }
}
