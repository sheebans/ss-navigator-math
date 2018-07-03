import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class AppToast {
  defaultPosition: string = 'top';

  defaultShowCloseButton: boolean = true;

  defaultCloseButtonText: string = 'OK';

  constructor(private toastCtrl: ToastController) {}

  presentToast(
    message: string,
    position?: string,
    showCloseButton?: boolean,
    closeButtonText?: string
  ) {
    let toast = this.toastCtrl.create({
      message: message,
      closeButtonText: closeButtonText
        ? closeButtonText
        : this.defaultCloseButtonText,
      position: position ? position : this.defaultPosition,
      showCloseButton: showCloseButton
        ? showCloseButton
        : this.defaultShowCloseButton
    });
    toast.present();
  }
}
