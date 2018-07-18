import { Component, Input } from '@angular/core';
import { CollectionModel } from '@models/collection/collection';
import { UnitModel } from '@models/course/unit';
import { LessonModel } from '@models/course/lesson';
import { ContentModel } from '@models/content/content';
import { CollectionPlaylistPanelComponent } from '@components/player/collection-playlist-panel/collection-playlist-panel';
import { ModalService } from '@providers/util/modal.service';

@Component({
  selector: 'content-info-panel',
  templateUrl: 'content-info-panel.html'
})
export class ContentInfoPanelComponent {
  @Input() collection: CollectionModel;

  @Input() content: ContentModel;

  @Input() unit: UnitModel;

  @Input() lesson: LessonModel;

  @Input() activePlayerIndex: number;

  @Input() isCollectionPlayListPanelOpen: boolean;

  constructor(private modalService: ModalService) {}

  openCollectionPlaylistPanel() {
    let data = {
      collection: this.collection,
      content: this.content,
      unit: this.unit,
      lesson: this.lesson,
      activePlayerIndex: this.activePlayerIndex,
      isCollectionPlayListPanelOpen: true
    };
    this.modalService.presentModal(CollectionPlaylistPanelComponent, data, {
      cssClass: 'inset-modal'
    });
  }

  closeCollectionPlaylistPanel() {
    this.modalService.dismiss();
  }
}
