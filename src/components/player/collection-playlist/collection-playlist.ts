import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Slides } from 'ionic-angular';
import { CollectionModel } from '@models/collection/collection';
import { UnitModel } from '@models/course/unit';
import { LessonModel } from '@models/course/lesson';
import { ContentModel } from '@models/content/content';

@Component({
  selector: 'collection-playlist',
  templateUrl: 'collection-playlist.html'
})
export class CollectionPlaylistComponent implements OnInit {
  @ViewChild(Slides) slides: Slides;

  @Input() collection: CollectionModel;

  @Input() activePlayerIndex: number;

  @Input() unit: UnitModel;

  @Input() lesson: LessonModel;

  contents: Array<ContentModel>;

  activeContent: ContentModel;

  constructor() {}

  ngOnInit() {
    this.contents = this.collection.content;
    this.activeContent = this.contents[this.activePlayerIndex];
  }

  slideChanged() {
    let activeIndex = this.slides.getActiveIndex();
    if (activeIndex <= this.contents.length - 1) {
      this.activePlayerIndex = activeIndex;
      this.activeContent = this.contents[this.activePlayerIndex];
    }
  }
}
