import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JoinClassroomPage } from '../join-classroom/join-classroom';
import { LookupsProvider } from '../../providers/lookups/lookups';
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
    public lookupsProvider: LookupsProvider
  ) {}

  gotoJoinClassroom() {
    this.navCtrl.push(JoinClassroomPage);
  }

  ionViewDidLoad() {
    this.lookupsProvider
      .getSchools('560e3a72-819f-40b6-b1ad-a1ae23915607')
      .subscribe(states => console.log(states));
    console.log('ionViewDidLoad WelcomePage');
  }
}
