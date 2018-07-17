import { ToastController, Toast } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class ToastService {
  defaultPosition: string = 'bottom';

  defaultShowCloseButton: boolean = true;

  defaultCloseButtonText: string = 'OK';

  toast: Toast;

  constructor(private toastCtrl: ToastController) {}

  presentToast(
    message: string,
    position?: string,
    showCloseButton?: boolean,
    closeButtonText?: string
  ) {
    if (!this.toast) {
      this.toast = this.toastCtrl.create({
        message: message,
        closeButtonText: closeButtonText
          ? closeButtonText
          : this.defaultCloseButtonText,
        position: position ? position : this.defaultPosition,
        showCloseButton: showCloseButton
          ? showCloseButton
          : this.defaultShowCloseButton
      });
      this.toast.onDidDismiss(() => {
        this.toast = null;
      });
      this.toast.present();
    }
  }
}
