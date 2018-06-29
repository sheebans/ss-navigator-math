import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from 'ionic-angular';
import { JoinClassroomPage } from '../join-classroom/join-classroom';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) {}

  gotoJoinClassroom() {
    this.navCtrl.push(JoinClassroomPage);
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(false);
    console.log('ionViewDidLoad WelcomePage');
  }
}
