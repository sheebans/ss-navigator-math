import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Slides } from 'ionic-angular';
import { CollectionModel } from '@models/collection/collection';
import { ContentModel } from '@models/content/content';

@Component({
  selector: 'collection-playlist',
  templateUrl: 'collection-playlist.html'
})
export class CollectionPlaylistComponent implements OnInit {
  @ViewChild(Slides) slides: Slides;

  @Input() collection: CollectionModel;

  @Input() activePlayerIndex: number;

  contents: Array<ContentModel>;

  constructor() {}

  ngOnInit() {
    this.contents = this.collection.content;
  }

  slideChanged() {
    this.activePlayerIndex = this.slides.getActiveIndex();
  }
}
