import { ErrorHandler, Injectable } from '@angular/core';
import { Device } from '@ionic-native/device';
import { Firebase } from '@ionic-native/firebase';
import { Platform } from 'ionic-angular';
import { AuthService } from '@providers/util/auth.service';
import { ToastService } from '@providers/util/toast.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  constructor(
    private device: Device,
    private toastService: ToastService,
    private firebase: Firebase,
    private platform: Platform,
    private authService: AuthService,
    private translate: TranslateService
  ) {
    super();
  }

  handleError(error: any): void {
    if (
      error.error &&
      error.error.message &&
      (error.status == 400 || error.status == 404)
    ) {
      this.toastService.presentToast(error.error.message);
    } else if (error.status == 401) {
      this.authService.clearStorageAndDoAuthentication();
    } else {
      this.translate.get('UN_EXPECTED_ERROR').subscribe(value => {
        this.toastService.presentToast(value);
      });
    }
    this.sendErrorToFirebaseCrash(error);
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
