import { Component, Input, OnInit } from '@angular/core';
import { ContentFormatComponent } from '@components/player/content-format.component';
import { PlayerService } from '@components/player/player.service';
import { YouTubeVideoProvider } from '@providers/api/google/youtube-video';
import { YoutubeVideoModel } from '@models/google/youtube-video';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { LoadingService } from '@providers/util/loading.service';
import { ENV } from '@app/env';

@Component({
  selector: 'youtube-video-format',
  templateUrl: 'youtube-video-format.html',
  providers: [PlayerService, YouTubeVideoProvider, YoutubeVideoPlayer]
})
export class YoutubeVideoFormatComponent
  implements ContentFormatComponent, OnInit {
  API_KEY: string = ENV.YOUTUBE_API_KEY;

  @Input() content: any;

  @Input() isActive: boolean;

  youtubeVideo: YoutubeVideoModel;

  youTubeVideoId: string;

  constructor(
    private playerService: PlayerService,
    private youTubeVideoProvider: YouTubeVideoProvider,
    private youtubeVideoPlayer: YoutubeVideoPlayer,
    private loadingService: LoadingService
  ) {
    this.loadingService.present();
  }

  ngOnInit() {
    this.youTubeVideoId = this.playerService.getYoutubeIdFromUrl(
      this.content.url
    );
    this.youTubeVideoProvider
      .getYoutubeVideoById(this.youTubeVideoId)
      .subscribe(youtubeVideo => {
        this.youtubeVideo = youtubeVideo;
      });
  }

  play() {
    this.youtubeVideoPlayer.openVideo(this.youTubeVideoId);
  }

  onLoadYoutubeImage() {
    this.loadingService.dismiss();
  }
}
