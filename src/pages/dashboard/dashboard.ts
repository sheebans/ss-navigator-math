import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from 'ionic-angular';
import { MilestoneProvider } from '@providers/api/milestone';
import { HeaderContextModel } from '@models/app/header/header-context';
import { HeaderTitleContextModel } from '@models/app/header/header-title-context';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  headerContextModel: HeaderContextModel;

  milestones: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private milestoneProvider: MilestoneProvider
  ) {
    this.init();
  }
  init() {
    const headerTitleContext: HeaderTitleContextModel = {
      title: 'DASHBOARD_TITLE'
    };
    this.headerContextModel = {
      show_menu: true,
      header_title_context: headerTitleContext
    };
    this.milestoneProvider.getMileStones().subscribe(data => {
      this.milestones = data.milestones;
    });
  }

  ionViewDidLoad() {
    this.menuCtrl.enable(true);
  }
}
