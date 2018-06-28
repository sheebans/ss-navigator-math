import { ToastController } from 'ionic-angular';
import { ErrorHandler, Injectable } from '@angular/core';
import { Device } from '@ionic-native/device';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  constructor(private device: Device, private toastCtrl: ToastController) {
    super();
  }

  handleError(error: any): void {
    console.log(error);
    console.log(this.device);
    this.presentToast();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Need to update proper error message',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
