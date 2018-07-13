import { Component, Input, OnInit } from '@angular/core';
import { CollectionModel } from '@models/collection/collection';
import { CollectionProvider } from '@providers/api/collection';
import { UnitModel } from '@models/course/unit';
import { LessonModel } from '@models/course/lesson';

@Component({
  selector: 'collection-player',
  templateUrl: 'collection-player.html',
  providers: [CollectionProvider]
})
export class CollectionPlayerComponent implements OnInit {
  @Input() id: string;

  @Input() unit: UnitModel;

  @Input() lesson: LessonModel;

  collection: CollectionModel;

  @Input() activePlayerIndex: number;

  constructor(private collectionProvider: CollectionProvider) {}

  ngOnInit() {
    this.collectionProvider.getCollection(this.id).subscribe(collection => {
      this.collection = collection;
    });
  }
}
