import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  headerModel: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.headerModel = {
      isMenu: true,
      isNotification: true,
      isTour: true,
      title: 'DASHBOARD_TITLE'
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
}
