import { Component, Input, OnInit } from '@angular/core';
import { ContentFormatComponent } from '@components/player/content-format.component';
import { PlayerService } from '@components/player/player.service';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'vimeo-video-format',
  templateUrl: 'vimeo-video-format.html',
  providers: [PlayerService, InAppBrowser]
})
export class VimeoVideoFormatComponent
  implements ContentFormatComponent, OnInit {
  vimeoPlayerUrl: string = 'https://player.vimeo.com/video/';

  vimeoVideoUrl: string;

  @Input()
  content: any;

  @Input()
  isActive: boolean;

  constructor(
    private inAppBrowser: InAppBrowser,
    private playerService: PlayerService
  ) {}

  ngOnInit() {
    const vimeoId = this.playerService.getVimeoIdFromUrl(this.content.url);
    this.vimeoVideoUrl = `${this.vimeoPlayerUrl}${vimeoId}`;
  }

  loadVimeo() {
    this.inAppBrowser.create(
      this.vimeoVideoUrl,
      '_blank',
      'location=no,EnableViewPortScale=yes,toolbar=no,closebuttoncaption=Close'
    );
  }
}
