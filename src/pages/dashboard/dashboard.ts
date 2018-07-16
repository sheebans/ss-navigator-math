import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from 'ionic-angular';
import { MilestoneProvider } from '@providers/api/stubs/milestone';
import { HeaderContextModel } from '@models/app/header/header-context';
import { HeaderTitleContextModel } from '@models/app/header/header-title-context';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  headerContextModel: HeaderContextModel = { show_menu: true };

  headerTitleContext: HeaderTitleContextModel = { title: 'DASHBOARD_TITLE' };

  milestones: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private milestoneProvider: MilestoneProvider
  ) {
    this.headerContextModel.header_title_context = this.headerTitleContext;
    this.init();
  }

  init() {
    this.milestoneProvider.getMileStones().subscribe(data => {
      this.milestones = data.milestones;
    });
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true);
  }
}
