import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the MilestoneCollectionItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'milestone-collection-item',
  templateUrl: 'milestone-collection-item.html'
})
export class MilestoneCollectionItemComponent {
  @Input() collection;

  @Input() activeLocation;

  constructor(private navCtrl: NavController) {}

  openPlayer() {
    this.navCtrl.push('PlayerPage', {
      classId: this.activeLocation.classId,
      courseId: this.activeLocation.courseId,
      unitId: this.activeLocation.unitId,
      lessonId: this.activeLocation.lessonId,
      id: this.collection.id,
      collectionType: this.collection.format
    });
  }
}
