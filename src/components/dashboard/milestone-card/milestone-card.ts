import { Component, Input } from '@angular/core';

/**
 * Generated class for the MilestoneCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'milestone-card',
  templateUrl: 'milestone-card.html'
})
export class MilestoneCardComponent {
  milestoneModel: any;

  constructor() {}

  @Input()
  set data(milestoneModel: any) {
    this.milestoneModel = milestoneModel;
  }
}
