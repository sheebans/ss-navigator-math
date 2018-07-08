import { Component } from '@angular/core';

/**
 * Generated class for the AssessmentPlayerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'assessment-player',
  templateUrl: 'assessment-player.html'
})
export class AssessmentPlayerComponent {
  text: string;

  constructor() {
    console.log('Hello AssessmentPlayerComponent Component');
    this.text = 'Hello World';
  }
}
