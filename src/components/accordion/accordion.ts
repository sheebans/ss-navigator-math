import { Component, Input } from '@angular/core';
import { ModalService } from '@providers/util/modal.service';
import { BadgeInfoComponent } from '@components/badge-info/badge-info';
/**
 * Generated class for the AccordionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'accordion',
  templateUrl: 'accordion.html'
})
export class AccordionComponent {
  accordionModel: any;
  shownAccordion: any;

  constructor(private modalService: ModalService) {}

  @Input()
  set accordionData(accordionModel: any) {
    this.accordionModel = accordionModel;
    console.log(this.accordionModel);
  }

  toggle(data) {
    if (this.isShown(data)) {
      this.shownAccordion = null;
    } else {
      this.shownAccordion = data;
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
