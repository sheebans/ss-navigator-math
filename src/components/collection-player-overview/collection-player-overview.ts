import { Component, Input } from '@angular/core';
import { CollectionModel } from '../../models/collection/collection';

@Component({
  selector: 'collection-player-overview',
  templateUrl: 'collection-player-overview.html'
})
export class CollectionPlayerOverviewComponent {
  @Input() collection: CollectionModel;

  constructor() {}
}
