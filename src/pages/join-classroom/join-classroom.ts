import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage, ContactUsPage } from '../';

/**
 * Generated class for the JoinClassroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-join-classroom',
  templateUrl: 'join-classroom.html'
})
export class JoinClassroomPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinClassroomPage');
  }

  gotoDashboard() {
    this.navCtrl.setRoot(DashboardPage);
  }

  goback() {
    this.navCtrl.pop();
  }
  gotoContactUs() {
    console.log('Here');
    this.navCtrl.push(ContactUsPage);
  }
}
