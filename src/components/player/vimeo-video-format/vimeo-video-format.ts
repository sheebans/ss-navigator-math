import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ContentFormatComponent } from '@components/player/content-format.component';
import { PlayerService } from '@components/player/player.service';
import { LoadingService } from '@providers/util/loading.service';

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

  loading: boolean;

  trustedVimeoVideoUrl: SafeResourceUrl;

  constructor(
    private domSanitizer: DomSanitizer,
    private playerService: PlayerService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    const vimeoId = this.playerService.getVimeoIdFromUrl(this.content.url);
    const vimeoVideoUrl = `${this.vimeoPlayerUrl}${vimeoId}`;
    this.trustedVimeoVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      vimeoVideoUrl
    );
  }

  onVimeoVideoLoad(): void {
    if (this.loading) {
      this.loadingService.dismiss();
      this.loading = false;
    } else {
      this.loadingService.present();
      this.loading = true;
    }
    console.log('vimeo video loaded Successfully!!!!');
  }
}
