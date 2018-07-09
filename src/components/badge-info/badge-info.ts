import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the BadgeInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'badge-info',
  templateUrl: 'badge-info.html'
})
export class BadgeInfoComponent {
  collections: any;

  constructor(public viewCtrl: ViewController) {
    this.init();
  }
  init() {
    this.collections = [
      {
        name: 'Which line best fits the data dummy data',
        type: 'Multiple Choice'
      },
      {
        name: 'Which line best fits the data dummy data',
        type: 'Multiple Choice'
      },
      {
        name: 'Which line best fits the data dummy data',
        type: 'True or False'
      },
      {
        name: 'Which line best fits the data dummy data',
        type: 'True or False'
      }
    ];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
