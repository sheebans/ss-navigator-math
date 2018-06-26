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
  selector: 'page-proficiency',
  templateUrl: 'proficiency.html'
})
export class ProficiencyPage {
  headerModel: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.headerModel = {
      isMenu: true,
      isNotification: false,
      isTour: true,
      title: 'PROFICIENCY_TITLE'
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProficiencyPage');
  }
}
