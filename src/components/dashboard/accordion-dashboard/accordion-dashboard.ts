import { Component, Input } from '@angular/core';
import { ModalService } from '@providers/util/modal.service';
import { BadgeInfoComponent } from '@components/badge-info/badge-info';
import { CourseMapProvider } from '@providers/api/course-map';
import { NavParams } from 'ionic-angular';

/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion-dashboard',
  templateUrl: 'accordion-dashboard.html'
})
export class DashboardAccordionComponent {
  accordionModel: any;

  shownAccordion: any;

  classId: string;

  courseId: string;

  courseMapModel: any;

  spinner: boolean;

  constructor(
    private modalService: ModalService,
    private courseMapProvider: CourseMapProvider,
    public navParams: NavParams
  ) {
    this.classId =
      navParams.get('classId') || '1a6a4243-2ac1-48f3-87db-51b15374d86c';
    this.courseId =
      navParams.get('courseId') || '5d2d7b02-540f-495b-9ce3-6f3ed5a99074';
  }

  @Input()
  set accordionData(accordionModel: any) {
    this.accordionModel = accordionModel;
  }

  getCourseMap(lesson, unitId) {
    this.spinner = true;
    this.courseMapProvider
      .getCourseMap(this.courseId, unitId, lesson.lesson_id, this.classId)
      .subscribe(courseMapModel => {
        this.courseMapModel = courseMapModel.course_path.collection_summary;
        this.spinner = false;
      });
    if (this.isShown(lesson)) {
      this.shownAccordion = null;
    } else {
      this.shownAccordion = lesson;
    }
  }

  isShown(data) {
    return this.shownAccordion === data;
  }
  openBadgeInfo() {
    this.modalService.presentModal(BadgeInfoComponent, null, {
      cssClass: 'inset-modal'
    });
  }
}
