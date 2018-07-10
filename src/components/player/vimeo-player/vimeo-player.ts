import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'vimeo-player',
  templateUrl: 'vimeo-player.html'
})
export class VimeoPlayerComponent {
  vimeoPlayerUrl: string = 'https://player.vimeo.com/video/';

  content: any = {
    id: '7b6780f2-ad2b-4e99-95b4-cdbf0efc0522',
    title: 'Marine Biologist Profile',
    url: 'https://vimeo.com/132656337',
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
  };

  trustedVimeoVideoUrl: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer) {
    const vimeoId = this.getVimeoIdFromUrl(this.content.url);
    const vimeoVideoUrl = `${this.vimeoPlayerUrl}${vimeoId}`;
    this.trustedVimeoVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      vimeoVideoUrl
    );
  }

  onVimeoVideoLoad(): void {
    console.log('vimeo video loaded Successfully!!!!');
  }

  /**
   * Get Vimeo Video ID from a URL
   * @param {string} url
   * @returns {{id: number}} id
   */
  getVimeoIdFromUrl(url): string {
    const regex = /([^/.]+)$/gm;
    let match = regex.exec(url);
    let id = '';
    if (match !== null) {
      id = match[0];
    }
    return id;
  }
}
