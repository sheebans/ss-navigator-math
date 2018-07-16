import { Component, Input } from '@angular/core';
import { UserLocationProvider } from '@providers/api/analytics/user-location';
import { NavParams } from 'ionic-angular';
import { Subject } from 'rxjs';

@Component({
  selector: 'milestone-list',
  templateUrl: 'milestone-list.html',
  providers: [UserLocationProvider]
})
export class MilestoneListComponent {
  @Input() milestones: any;

  classId: string;

  private locationModel: Subject<Object> = new Subject<Object>();

  constructor(
    private userLocationProvider: UserLocationProvider,
    private navParams: NavParams
  ) {
    this.classId =
      this.navParams.get('classId') || 'bd5b0c71-3b3f-441f-903f-91f000fa9863';
  }

  ngOnInit() {
    this.userLocationProvider.getLocation(this.classId).subscribe(location => {
      this.locationModel.next(location);
    });
  }
}
