import { Component, Input, OnInit } from '@angular/core';
import { ContentFormatComponent } from '@components/player/content-format.component';
import { PlayerService } from '@components/player/player.service';
import { YouTubeProvider } from '@providers/api/youtube/youtube';
import { YoutubeModel } from '@models/app/youtube';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { ENV } from '@app/env';

@Component({
  selector: 'youtube-video-format',
  templateUrl: 'youtube-video-format.html',
  providers: [PlayerService, YouTubeProvider, YoutubeVideoPlayer]
})
export class YoutubeVideoFormatComponent
  implements ContentFormatComponent, OnInit {
  API_KEY: string = ENV.YOUTUBE_API_KEY;

  @Input() content: any;

  @Input() isActive: boolean;

  youtube: YoutubeModel;

  youTubeVideoId: string;

  constructor(
    private playerService: PlayerService,
    private youTubeProvider: YouTubeProvider,
    private youtubeVideoPlayer: YoutubeVideoPlayer
  ) {}

  ngOnInit() {
    this.youTubeVideoId = this.playerService.getYoutubeIdFromUrl(
      this.content.url
    );
    this.youTubeProvider
      .getYoutubeVideoById(this.youTubeVideoId)
      .subscribe(youtubeModel => {
        this.youtube = youtubeModel;
      });
  }

  play() {
    this.youtubeVideoPlayer.openVideo(this.youTubeVideoId);
  }
}
