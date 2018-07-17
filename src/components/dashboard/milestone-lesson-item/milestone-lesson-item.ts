import { Component, Input } from '@angular/core';
import { ModalService } from '@providers/util/modal.service';
import { BadgeInfoComponent } from '@components/dashboard/badge-info/badge-info';
/**
 * Generated class for the MilestoneLessonItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'milestone-lesson-item',
  templateUrl: 'milestone-lesson-item.html'
})
export class MilestoneLessonItemComponent {
  classId: string;

  courseId: string;

  @Input() unit;

  @Input() lesson;

  constructor(private modalService: ModalService) {}

  ngOnInit() {}

  openBadgeInfo() {
    this.modalService.presentModal(BadgeInfoComponent, null, {
      cssClass: 'inset-modal'
    });
  }
}
