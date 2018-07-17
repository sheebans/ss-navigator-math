import { LoadingController, Loading } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {
  loading: Loading;

  constructor(private loadingCtrl: LoadingController) {}

  present() {
    if (!this.loading) {
      this.loading = this.loadingCtrl.create({
        content: ''
      });
      this.loading.present();
    }
  }

  dismiss() {
    if (this.loading) {
      this.loading.dismiss();
      this.loading = null;
    }
  }
}
