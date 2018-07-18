import { ModalController, Modal } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
  defaultParams: object = {
    cssClass: 'inset-modal',
    showBackDrop: true,
    enableBackdropDismiss: true
  };

  modal: Modal;

  constructor(private modalCtrl: ModalController) {}

  presentModal(component: any, data?: object, params?: object) {
    this.modal = this.modalCtrl.create(
      component,
      data,
      params ? params : this.defaultParams
    );
    this.modal.present();
  }

  dismiss() {
    this.modal.dismiss();
  }
}
