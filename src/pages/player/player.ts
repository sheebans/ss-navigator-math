import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UnitModel } from '@models/course/unit';
import { LessonModel } from '@models/course/lesson';
import { ClassModel } from '@models/class/class';
import { ClassesProvider } from '@providers/api/classes';
import { CoursesProvider } from '@providers/api/courses';

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

  collectionId: string;

  collectionType: string;

  unit: UnitModel;

  lesson: LessonModel;

  class: ClassModel;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private classesProvider: ClassesProvider,
    private coursesProvider: CoursesProvider
  ) {
    this.classId =
      navParams.get('classId') || 'bd5b0c71-3b3f-441f-903f-91f000fa9863';
    this.courseId =
      navParams.get('courseId') || '5d2d7b02-540f-495b-9ce3-6f3ed5a99074';
    this.unitId =
      navParams.get('unitId') || '495644c9-5814-4144-8a06-bb2d55d58e30';
    this.lessonId =
      navParams.get('lessonId') || '988cd1a9-88c9-4541-a30f-51e12c342ec4';
    this.collectionId =
      navParams.get('collectionId') || 'a40d6e15-7dbf-4988-8ffd-5cac959de1e6';
    this.collectionType = navParams.get('collectionType') || 'collection';
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
