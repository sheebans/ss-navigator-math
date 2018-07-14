import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CollectionModel } from '@models/collection/collection';
import { CollectionProvider } from '@providers/api/collection';
import { UnitModel } from '@models/course/unit';
import { LessonModel } from '@models/course/lesson';
import { HeaderContextModel } from '@models/app/header/header-context';
import { HeaderTitleContextModel } from '@models/app/header/header-title-context';

@Component({
  selector: 'collection-player',
  templateUrl: 'collection-player.html',
  providers: [CollectionProvider]
})
export class CollectionPlayerComponent implements OnInit, OnChanges {
  headerContextModel: HeaderContextModel;

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

  ngOnChanges() {
    const headerTitleContext: HeaderTitleContextModel = {
      title: this.collection ? this.collection.title : '',
      subtitle: this.lesson ? this.lesson.title : '',
      view_name: 'player'
    };
    this.headerContextModel = {
      header_title_context: headerTitleContext
    };
  }

  openPlayer(data) {
    this.activePlayerIndex = data.index;
  }
}
