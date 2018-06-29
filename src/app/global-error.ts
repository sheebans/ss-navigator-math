import { ToastController } from 'ionic-angular';
import { ErrorHandler, Injectable } from '@angular/core';
import { Device } from '@ionic-native/device';
import { Firebase } from '@ionic-native/firebase';
import { Platform } from 'ionic-angular';
import { AppAuth } from './app.auth';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  constructor(
    private device: Device,
    private toastCtrl: ToastController,
    private firebase: Firebase,
    private platform: Platform,
    private appAuth: AppAuth
  ) {
    super();
  }

  handleError(error: any): void {
    this.presentToast();
    this.sendErrorToFirebaseCrash(error);
    if (error.status == 401) {
      this.appAuth.clearStorageAndDoAuthentication();
    }
    console.log(error);
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Something went wrong!!!',
      duration: 3000,
      position: 'top'
    });
    toast.present();
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
