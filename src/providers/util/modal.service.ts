import { ModalController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
  defaultParams: object = {
    cssClass: 'inset-modal',
    showBackDrop: true,
    enableBackdropDismiss: true
  };

  constructor(private modalCtrl: ModalController) {}

  presentModal(component: any, data?: object, params?: object) {
    let modal = this.modalCtrl.create(
      component,
      data,
      params ? params : this.defaultParams
    );
    modal.present();
  }
}
