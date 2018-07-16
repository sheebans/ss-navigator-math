import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ContentFormatComponent } from '@components/player/content-format.component';
import { PlayerService } from '@components/player/player.service';
import { Loading, LoadingController } from 'ionic-angular';

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

  loading: Loading;

  trustedVimeoVideoUrl: SafeResourceUrl;

  constructor(
    private domSanitizer: DomSanitizer,
    private playerService: PlayerService,
    private loadingCtrl: LoadingController
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
      this.loading.dismiss();
      this.loading = null;
    } else {
      this.loading = this.loadingCtrl.create({
        content: ''
      });
      this.loading.present();
    }
    console.log('vimeo video loaded Successfully!!!!');
  }
}
