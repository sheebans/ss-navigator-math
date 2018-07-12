import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { PlayerComponent } from '@components/player';

@Component({
  selector: 'webpage-player',
  templateUrl: 'webpage-player.html'
})
export class WebpagePlayerComponent implements PlayerComponent, OnInit {
  @Input() content: any;

  @Input() isActive: boolean;

  trustedWebsiteUrl: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    this.trustedWebsiteUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.content.url
    );
  }

  onWebpageLoad(): void {
    console.log('webpage loaded Successfully!!!!');
  }
}
