import { Injectable } from '@angular/core';
import {
  YoutubeVideoFormatComponent,
  VimeoVideoFormatComponent,
  WebpageFormatComponent,
  PdfFormatComponent
} from '@components/player';

@Injectable()
export class PlayerService {
  private playerComponentMapper: object = {
    webpage_resource: WebpageFormatComponent,
    video_resource: YoutubeVideoFormatComponent,
    vimeo_resource: VimeoVideoFormatComponent,
    pdf_resource: PdfFormatComponent
  };

  constructor() {}

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

  /**
   * It will identify the suitable player component based on content format
   * @param  {any} content
   * @return {[playerComponent]}
   */
  getPlayerComponent(content: any) {
    let playerFormat = this.getPlayerFormat(content);
    let playerComponent = this.playerComponentMapper[playerFormat];
    return playerComponent;
  }

  private getPlayerFormat(content: any): string {
    console.log(content);
    return content.content_subformat;
  }
}
