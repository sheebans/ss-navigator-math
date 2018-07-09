import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from 'ionic-angular';
import { MilestoneProvider } from '@providers/api/milestone';

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
  milestones: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private milestoneProvider: MilestoneProvider
  ) {
    this.init();
    this.headerModel = {
      isMenu: true,
      isNotification: true,
      isTour: true,
      title: 'DASHBOARD_TITLE'
    };
  }
  init() {
    this.milestoneProvider.getMileStones().subscribe(data => {
      this.milestones = data.milestones;
    });
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(true);
  }
}
