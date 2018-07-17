import { Injectable } from '@angular/core';
import { PLAYER_CONTENT_FORMAT_MAPPER } from '@components/player/player.component.imports';

@Injectable()
export class PlayerService {
  private playerComponentMapper: object = PLAYER_CONTENT_FORMAT_MAPPER;

  private youtubePattern: any = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;

  private vimeoPattern: any = /(http|https)?:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^/]*)\/videos\/|)(\d+)(?:|\/\?)/;

  private allowedImagesExtension: Array<string> = [
    '.jpg',
    '.jpeg',
    '.gif',
    '.png'
  ];

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

  getPlayerFormat(content: any): string {
    let playerFormat = '';
    if (content.url) {
      let urlExtension = this.getUrlExtension(content.url);
      if (urlExtension === '.pdf') {
        playerFormat = 'pdf';
      } else if (this.youtubePattern.test(content.url)) {
        playerFormat = 'youtube';
      } else if (this.vimeoPattern.test(content.url)) {
        playerFormat = 'vimeo';
      } else if (this.allowedImagesExtension.indexOf(urlExtension) > -1) {
        playerFormat = 'image';
      } else {
        playerFormat = 'webpage';
      }
    } else {
      playerFormat = content.content_subformat;
    }
    return playerFormat;
  }

  private getUrlExtension(url: string) {
    let extension = (url = url.substr(1 + url.lastIndexOf('/')).split('?')[0])
      .split('#')[0]
      .substr(url.lastIndexOf('.'));
    return extension != null ? extension.toLowerCase() : '';
  }
}
