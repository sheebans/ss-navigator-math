import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeaderContextModel } from '@models/app/header/header-context';
import { HeaderTitleContextModel } from '@models/app/header/header-title-context';

@IonicPage()
@Component({
  selector: 'page-proficiency',
  templateUrl: 'proficiency.html'
})
export class ProficiencyPage {
  headerContextModel: HeaderContextModel;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const headerTitleContext: HeaderTitleContextModel = {
      title: 'PROFICIENCY_TITLE'
    };
    this.headerContextModel = {
      show_menu: true,
      header_title_context: headerTitleContext
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProficiencyPage');
  }
}
