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

  showReport: boolean = false;

  SWIPE_LEFT: number = 2;

  constructor() {}

  ngOnInit() {
    this.contents = this.collection.content;
    this.activeContent = this.contents[this.activePlayerIndex];
  }

  swipeLeft(event) {
    if (event.direction == this.SWIPE_LEFT) {
      this.showReport =
        this.contents.length - 1 === this.activePlayerIndex ? true : false;
    }
  }

  slideChanged() {
    let activeIndex = this.slides.getActiveIndex();
    if (activeIndex <= this.contents.length - 1) {
      this.activePlayerIndex = activeIndex;
      this.activeContent = this.contents[this.activePlayerIndex];
    }
  }
}
