import { Component, EventEmitter, Output } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { CollectionModel } from '@models/collection/collection';
import { UnitModel } from '@models/course/unit';
import { LessonModel } from '@models/course/lesson';
import { ContentModel } from '@models/content/content';

@Component({
  selector: 'collection-playlist-panel',
  templateUrl: 'collection-playlist-panel.html'
})
export class CollectionPlaylistPanelComponent {
  collection: CollectionModel;

  content: ContentModel;

  unit: UnitModel;

  lesson: LessonModel;

  activePlayerIndex: number;

  isCollectionPlayListPanelOpen: boolean = true;

  @Output()
  onContentPlay: EventEmitter<{
    content: ContentModel;
    index: number;
  }> = new EventEmitter();

  constructor(private params: NavParams) {}

  ngOnInit() {
    this.collection = this.params.get('collection');
    this.content = this.params.get('content');
    this.unit = this.params.get('unit');
    this.lesson = this.params.get('lesson');
    this.activePlayerIndex = this.params.get('activePlayerIndex');
  }

  playContent(content: ContentModel, index: number) {
    let data = {
      content: content,
      index: index
    };
    this.onContentPlay.emit(data);
  }
}
