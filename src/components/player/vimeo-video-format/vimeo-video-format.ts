import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ContentFormatComponent } from '@components/player';
import { PlayerService } from '@components/player/player.service';

@Component({
  selector: 'vimeo-video-format',
  templateUrl: 'vimeo-video-format.html',
  providers: [PlayerService]
})
export class VimeoVideoFormatComponent
  implements ContentFormatComponent, OnInit {
  vimeoPlayerUrl: string = 'https://player.vimeo.com/video/';

  @Input() content: any;

  @Input() isActive: boolean;

  trustedVimeoVideoUrl: SafeResourceUrl;

  constructor(
    private domSanitizer: DomSanitizer,
    private playerService: PlayerService
  ) {}

  ngOnInit() {
    const vimeoId = this.playerService.getVimeoIdFromUrl(this.content.url);
    const vimeoVideoUrl = `${this.vimeoPlayerUrl}${vimeoId}`;
    this.trustedVimeoVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      vimeoVideoUrl
    );
  }

  onVimeoVideoLoad(): void {
    console.log('vimeo video loaded Successfully!!!!');
  }
}
