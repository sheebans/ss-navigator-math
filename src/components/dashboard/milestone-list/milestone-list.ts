import { Component, Input } from '@angular/core';
import { UserLocationProvider } from '@providers/api/analytics/user-location';
import { NavParams } from 'ionic-angular';
import { UserLocationModel } from '@models/analytics/user-location';
import { CourseMapProvider } from '@providers/api/core/course-map';

@Component({
  selector: 'milestone-list',
  templateUrl: 'milestone-list.html',
  providers: [UserLocationProvider, CourseMapProvider]
})
export class MilestoneListComponent {
  @Input() milestones: any;

  @Input() context: any;

  classId: string;

  userLocationModel: UserLocationModel;

  constructor(
    private userLocationProvider: UserLocationProvider,
    private courseMapProvider: CourseMapProvider,
    private navParams: NavParams
  ) {
    this.classId =
      this.navParams.get('classId') || 'bd5b0c71-3b3f-441f-903f-91f000fa9863';
  }

  ngOnInit() {
    this.userLocationProvider
      .getLocation(this.classId)
      .subscribe(userLocationModel => {
        if (userLocationModel) {
          this.courseMapProvider
            .getCourseMap(
              this.context.courseId,
              userLocationModel.unitId,
              userLocationModel.lessonId,
              this.context.classId
            )
            .subscribe(courseMap => {
              this.userLocationModel = userLocationModel;
              this.userLocationModel.collection =
                courseMap.course_path.collection_summary;
            });
        }
      });
  }
}
