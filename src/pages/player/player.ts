import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UnitModel } from '@models/course/unit';
import { LessonModel } from '@models/course/lesson';
import { ClassModel } from '@models/class/class';
import { ClassesProvider } from '@providers/api/core/classes';
import { CoursesProvider } from '@providers/api/core/courses';

@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html'
})
export class PlayerPage {
  classId: string;

  courseId: string;

  unitId: string;

  lessonId: string;

  id: string;

  collectionType: string;

  unit: UnitModel;

  lesson: LessonModel;

  class: ClassModel;

  activePlayerIndex: number = -1;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private classesProvider: ClassesProvider,
    private coursesProvider: CoursesProvider
  ) {
    this.classId = navParams.get('classId');
    this.courseId = navParams.get('courseId');
    this.unitId = navParams.get('unitId');
    this.lessonId = navParams.get('lessonId');
    this.id = navParams.get('id');
    this.collectionType = navParams.get('collectionType');
  }

  ionViewDidLoad() {
    this.classesProvider.getClass(this.classId).subscribe(classModel => {
      this.class = classModel;
    });
    this.coursesProvider
      .getUnit(this.courseId, this.unitId)
      .subscribe(unitModel => {
        this.unit = unitModel;
      });
    this.coursesProvider
      .getLesson(this.courseId, this.unitId, this.lessonId)
      .subscribe(lessonModel => {
        this.lesson = lessonModel;
      });
  }
}
