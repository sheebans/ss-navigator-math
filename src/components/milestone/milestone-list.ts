import { Component, Input } from '@angular/core';
import { UserLocationProvider } from '@providers/api/user-location';
import { NavParams } from 'ionic-angular';
import { Subject } from 'rxjs';

/**
 * Generated class for the MilestoneComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'milestone-list',
  templateUrl: 'milestone-list.html'
})
export class MilestoneListComponent {
  milestones: any;

  classId: string;

  private locationModel: Subject<Object> = new Subject<Object>();

  @Input()
  set milestone(milestoneModel: any) {
    this.milestones = milestoneModel;
  }

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
