import { ErrorHandler, Injectable } from '@angular/core';
import { Device } from '@ionic-native/device';
import { Firebase } from '@ionic-native/firebase';
import { Platform } from 'ionic-angular';
import { AppAuth } from './app.auth';
import { AppToast } from './app-toast';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  constructor(
    private device: Device,
    private appToast: AppToast,
    private firebase: Firebase,
    private platform: Platform,
    private appAuth: AppAuth,
    private translate: TranslateService
  ) {
    super();
  }

  handleError(error: any): void {
    if (error.message) {
      this.appToast.presentToast(error.message);
    } else {
      this.translate.get('UN_EXPECTED_ERROR').subscribe(value => {
        this.appToast.presentToast(value);
      });
    }
    this.sendErrorToFirebaseCrash(error);
    if (error.status == 401) {
      this.appAuth.clearStorageAndDoAuthentication();
    }
    console.log(error);
  }

  sendErrorToFirebaseCrash(error: any) {
    if (this.platform.is('cordova')) {
      let errorMessage: string = 'Error: ';
      if (error.message) {
        errorMessage = `${errorMessage}${error.message}`;
      } else {
        errorMessage = `${errorMessage} Unknow Error`;
      }
      errorMessage = `${errorMessage} Device: model-${
        this.device.model
      } platform-${this.device.platform} version-${this.device.version}`;
      this.firebase.logError(errorMessage);
    }
  }
}
