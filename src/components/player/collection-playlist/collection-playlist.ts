import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'collection-playlist',
  templateUrl: 'collection-playlist.html'
})
export class CollectionPlaylistComponent implements OnInit {
  @ViewChild(Slides) slides: Slides;

  @Input() contents: Array<any>;

  @Input() activeSlideIndex: number;

  constructor() {}

  ngOnInit() {
    this.contents = this.getContents();
  }

  slideChanged() {
    this.activeSlideIndex = this.slides.getActiveIndex();
  }

  getContents(): Array<any> {
    return [
      {
        id: 'e532f7d8-f45b-41b8-9e37-68588447fad1',
        title: 'How Does SONAR work?',
        url: 'https://cdn.gooru.org/5894724c-130f-4a66-91b2-a7e83f65f38c.pdf',
        creator_id: 'd701fa59-d1ef-4a27-815c-280f98a478ba',
        original_creator_id: '07a3c45d-08b0-4e2e-b3de-04e5afe7d22d',
        publish_date: null,
        content_format: 'resource',
        content_subformat: 'pdf_resource',
        answer: null,
        metadata: null,
        narration:
          'Read through this webpage to learn how SONAR works, and how SONAR was developed from the natural behavior of echolocation.',
        taxonomy: {},
        hint_explanation_detail: null,
        thumbnail: null,
        sequence_id: 4,
        is_copyright_owner: false,
        visible_on_profile: true,
        display_guide: {},
        description:
          'Read through this webpage to learn how SONAR works, and how SONAR was developed from the natural behavior of echolocation.'
      },
      {
        id: '7b6780f2-ad2b-4e99-95b4-cdbf0efc0522',
        title: 'Marine Biologist Profile',
        url: 'https://vimeo.com/132656337',
        creator_id: 'd701fa59-d1ef-4a27-815c-280f98a478ba',
        original_creator_id: 'd701fa59-d1ef-4a27-815c-280f98a478ba',
        publish_date: null,
        content_format: 'resource',
        content_subformat: 'vimeo_resource',
        answer: null,
        metadata: null,
        narration:
          'Watch this video to learn what a marine biologist does everyday, and to better understand how to become a marine biologist.',
        taxonomy: {},
        hint_explanation_detail: null,
        thumbnail: null,
        sequence_id: 1,
        is_copyright_owner: false,
        visible_on_profile: true,
        display_guide: {
          is_broken: 0,
          is_frame_breaker: 0
        },
        description:
          'Watch this video to learn what a marine biologist does everyday, and to better understand how to become a marine biologist.'
      },
      {
        id: 'e532f7d8-f45b-41b8-9e37-68588447fad1',
        title: 'How Does SONAR work?',
        url: 'https://www.mathsisfun.com/definitions/distributive-law.html',
        creator_id: 'd701fa59-d1ef-4a27-815c-280f98a478ba',
        original_creator_id: '07a3c45d-08b0-4e2e-b3de-04e5afe7d22d',
        publish_date: null,
        content_format: 'resource',
        content_subformat: 'webpage_resource',
        answer: null,
        metadata: null,
        narration:
          'Read through this webpage to learn how SONAR works, and how SONAR was developed from the natural behavior of echolocation.',
        taxonomy: {},
        hint_explanation_detail: null,
        thumbnail: null,
        sequence_id: 4,
        is_copyright_owner: false,
        visible_on_profile: true,
        display_guide: {},
        description:
          'Read through this webpage to learn how SONAR works, and how SONAR was developed from the natural behavior of echolocation.'
      },
      {
        id: '7b6780f2-ad2b-4e99-95b4-cdbf0efc0522',
        title: 'Marine Biologist Profile',
        url: 'https://youtu.be/wo9q1gvDSmc',
        creator_id: 'd701fa59-d1ef-4a27-815c-280f98a478ba',
        original_creator_id: 'd701fa59-d1ef-4a27-815c-280f98a478ba',
        publish_date: null,
        content_format: 'resource',
        content_subformat: 'video_resource',
        answer: null,
        metadata: null,
        narration:
          'Watch this video to learn what a marine biologist does everyday, and to better understand how to become a marine biologist.',
        taxonomy: {},
        hint_explanation_detail: null,
        thumbnail: null,
        sequence_id: 1,
        is_copyright_owner: false,
        visible_on_profile: true,
        display_guide: {
          is_broken: 0,
          is_frame_breaker: 0
        },
        description:
          'Watch this video to learn what a marine biologist does everyday, and to better understand how to become a marine biologist.'
      }
    ];
  }
}
