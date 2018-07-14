import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalService } from '@providers/util/modal.service';
import { BadgeInfoComponent } from '@components/badge-info/badge-info';
import { CourseMapProvider } from '@providers/api/course-map';
import { NavParams, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'milestone-accordion',
  templateUrl: 'milestone-accordion.html'
})
export class MilestoneAccordionComponent {
  accordionModel: any;

  classId: string;

  courseId: string;

  courseMapModel: any;

  spinner: boolean;

  toogleData: any;

  eventsSubscription: any;

  locationSubscription: any;

  userLocation: any;

  @Input() events: Observable<Object>;

  @Input() userLocationModel: Observable<Object>;

  @Output() messageEvent = new EventEmitter<Object>();

  @Input()
  set accordionData(accordionModel: any) {
    this.accordionModel = accordionModel;
  }

  constructor(
    private modalService: ModalService,
    private courseMapProvider: CourseMapProvider,
    public navParams: NavParams,
    private navCtrl: NavController
  ) {
    this.classId =
      navParams.get('classId') || 'bd5b0c71-3b3f-441f-903f-91f000fa9863';
    this.courseId =
      navParams.get('courseId') || '5d2d7b02-540f-495b-9ce3-6f3ed5a99074';
  }

  ngOnInit() {
    this.locationSubscription = this.userLocationModel.subscribe(location => {
      this.userLocation = location;
    });
    this.eventsSubscription = this.events.subscribe(data => {
      this.toogleData = data;
    });
  }

  getCourseMap(lesson, unitId) {
    this.spinner = true;
    this.courseMapProvider
      .getCourseMap(this.courseId, unitId, lesson.lesson_id, this.classId)
      .subscribe(courseMapModel => {
        this.courseMapModel = courseMapModel.course_path.collection_summary;
        this.spinner = false;
      });
    this.messageEvent.emit(lesson);
  }

  checkCurrentLocation(lesson) {
    return lesson.lesson_id === this.userLocation.content[0].lessonId;
  }

  checkCurrentCourseMap(course) {
    return course.id === this.userLocation.content[0].id;
  }

  isToggle(lesson) {
    return lesson.lesson_id === this.toogleData.lesson_id;
  }

  openPlayer(unitId, lesson, collection) {
    this.navCtrl.push('PlayerPage', {
      classId: this.classId,
      courseId: this.courseId,
      unitId: unitId,
      lessonId: lesson.lesson_id,
      id: collection.id,
      collectionType: collection.format
    });
  }

  openBadgeInfo() {
    this.modalService.presentModal(BadgeInfoComponent, null, {
      cssClass: 'inset-modal'
    });
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
    this.locationSubscription.unsubscribe();
  }
}
