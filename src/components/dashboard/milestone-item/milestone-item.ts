import { Component, Input } from '@angular/core';
import { UserLocationModel } from '@models/analytics/user-location';
import { CourseMapProvider } from '@providers/api/core/course-map';
@Component({
  selector: 'milestone-item',
  templateUrl: 'milestone-item.html',
  providers: [CourseMapProvider]
})
export class MilestoneItemComponent {
  classId: string;

  courseId: string;

  isLoading: boolean = false;

  collectionModel: any;

  @Input() milestone: any;

  @Input() context: any;

  @Input() location: UserLocationModel;

  constructor(private courseMapProvider: CourseMapProvider) {}

  ngOnInit() {
    if (this.location) {
      this.collectionModel = this.location.collection;
    }
    this.courseId = this.context.courseId;
    this.classId = this.context.classId;
  }

  checkCurrentLesson(lesson) {
    return lesson.lesson_id === this.location.lessonId;
  }

  getCollections(lesson, unit) {
    this.isLoading = true;
    this.updateLocation(lesson, unit.unit_id);
    this.courseMapProvider
      .getCourseMap(this.courseId, unit.unit_id, lesson.lesson_id, this.classId)
      .subscribe(courseMap => {
        this.collectionModel = courseMap.course_path.collection_summary;
        this.isLoading = false;
      });
  }

  checkCurrentCollection(collection) {
    return collection.id === this.location.id;
  }

  isToggle(lesson) {
    if (this.location) {
      return lesson.lesson_id === this.location.lessonId;
    }
  }

  updateLocation(lesson, unitId) {
    this.location.lessonId = lesson.lesson_id;
    this.location.unitId = unitId;
    this.location.classId = this.classId;
    this.location.courseId = this.courseId;
  }
}
