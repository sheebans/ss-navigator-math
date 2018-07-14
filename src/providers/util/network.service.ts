import { Network } from '@ionic-native/network';
import { Injectable } from '@angular/core';
import { ToastService } from '@providers/util/toast.service';

@Injectable()
export class NetworkService {
  constructor(private network: Network, private toastService: ToastService) {}

  isConnect(): void {
    this.network.onDisconnect().subscribe(() => {
      this.toastService.presentToast('Please connect to Internet connection');
    });
  }
}
