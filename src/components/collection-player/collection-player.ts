import { Component, Input, OnInit } from '@angular/core';
import { CollectionProvider } from '../../providers/api/collection';
import { CollectionModel } from '../../models/collection/collection';

@Component({
  selector: 'collection-player',
  templateUrl: 'collection-player.html',
  providers: [CollectionProvider]
})
export class CollectionPlayerComponent implements OnInit {
  @Input() id: string;

  collection: CollectionModel;

  constructor(private collectionProvider: CollectionProvider) {}

  ngOnInit() {
    this.collectionProvider.getCollection(this.id).subscribe(collection => {
      this.collection = collection;
    });
  }
}
