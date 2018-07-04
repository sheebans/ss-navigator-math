import { Component, Input } from '@angular/core';

@Component({
  selector: 'collection-player-overview',
  templateUrl: 'collection-player-overview.html'
})
export class CollectionPlayerOverviewComponent {
  @Input() title: string;

  constructor() {
    //this.text = 'Hello World';
  }
}
