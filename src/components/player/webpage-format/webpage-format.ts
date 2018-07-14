import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ContentFormatComponent } from '@components/player/content-format.component';
@Component({
  selector: 'webpage-format',
  templateUrl: 'webpage-format.html'
})
export class WebpageFormatComponent implements ContentFormatComponent, OnInit {
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
