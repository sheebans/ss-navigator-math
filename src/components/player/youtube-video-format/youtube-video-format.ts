import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ContentFormatComponent } from '@components/player/content-format.component';
import { PlayerService } from '@components/player/player.service';

@Component({
  selector: 'youtube-video-format',
  templateUrl: 'youtube-video-format.html',
  providers: [PlayerService]
})
export class YoutubeVideoFormatComponent
  implements ContentFormatComponent, OnInit {
  youtubePlayerUrl: string = 'https://www.youtube.com/embed/';

  @Input() content: any;

  @Input() isActive: boolean;

  trustedYoutubeVideoUrl: SafeResourceUrl;

  constructor(
    private domSanitizer: DomSanitizer,
    private playerService: PlayerService
  ) {}

  ngOnInit() {
    const youtubeId = this.playerService.getYoutubeIdFromUrl(this.content.url);
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
      return this.playerService.convertToSeconds(
        this.content.display_guide.start_time
      );
    }
    return null;
  }

  /**
   * @property {string} The time, measured in seconds from the start of the video, when the player should stop playing the video
   */
  getStop(): number {
    if (this.content.display_guide && this.content.display_guide.end_time) {
      return this.playerService.convertToSeconds(
        this.content.display_guide.end_time
      );
    }
    return 0;
  }
}
