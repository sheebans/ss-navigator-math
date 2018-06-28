import { ErrorHandler, Injectable } from '@angular/core';
import { Device } from '@ionic-native/device';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  constructor(private device: Device) {
    super();
  }

  handleError(error: any): void {
    console.log(error);
    console.log(this.device);
  }
}
