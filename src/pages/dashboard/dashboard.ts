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

  context: object;

  classId: string;

  courseId: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private milestoneProvider: MilestoneProvider
  ) {
    this.classId =
      this.navParams.get('classId') || 'bd5b0c71-3b3f-441f-903f-91f000fa9863';
    this.courseId =
      this.navParams.get('courseId') || '5d2d7b02-540f-495b-9ce3-6f3ed5a99074';
    this.headerContextModel.header_title_context = this.headerTitleContext;
  }

  ngOnInit() {
    this.milestoneProvider.getMileStones().subscribe(data => {
      this.milestones = data.milestones;
    });

    this.serializeLessonMeta();
  }

  serializeLessonMeta() {
    this.context = {
      classId: this.classId,
      courseId: this.courseId
    };
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true);
  }
}
