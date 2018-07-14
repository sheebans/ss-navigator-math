import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'youtube-player',
  templateUrl: 'youtube-player.html'
})
export class YoutubePlayerComponent {
  youtubePlayerUrl: string = 'https://www.youtube.com/embed/';

  content: any = {
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
  };

  trustedYoutubeVideoUrl: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer) {
    const youtubeId = this.getYoutubeIdFromUrl(this.content.url);
    const start = this.getStart();
    const stop = this.getStop();
    const youtubeVideoUrl = `${
      this.youtubePlayerUrl
    }${youtubeId}?start=${start}&end=${stop}&rel=0`;
    this.trustedYoutubeVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      youtubeVideoUrl
    );
  }

  onYoutubeVideoLoad(): void {
    console.log('youtube video loaded Successfully!!!!');
  }

  /**
   * @property {string} Begin playing the video at the given number of seconds from the start of the video
   */
  getStart(): number {
    if (this.content.display_guide && this.content.display_guide.start_time) {
      return this.convertToSeconds(this.content.display_guide.start_time);
    }
    return null;
  }

  /**
   * @property {string} The time, measured in seconds from the start of the video, when the player should stop playing the video
   */
  getStop(): number {
    if (this.content.display_guide && this.content.display_guide.end_time) {
      return this.convertToSeconds(this.content.display_guide.end_time);
    }
    return 0;
  }

  /**
   * Convert the time in this format 00:00:00 to seconds
   */
  convertToSeconds(time): number {
    const sections = time.split(':');
    return (
      parseInt(sections[0]) * 3600 +
      parseInt(sections[1]) * 60 +
      parseInt(sections[2])
    );
  }

  /**
   * Retrieves the youtube id from a url
   * @param url
   * @returns {*}
   */
  getYoutubeIdFromUrl(url): string {
    const regexp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    var match = url.match(regexp);
    if (match && match[2].length === 11) {
      return match[2];
    }
  }
}
