import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ContentFormatComponent } from '@components/player/content-format.component';

@Component({
  selector: 'image-format',
  templateUrl: 'image-format.html'
})
export class ImageFormatComponent implements ContentFormatComponent, OnInit {
  @Input() content: any;

  @Input() isActive: boolean;

  trustedImageUrl: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    this.trustedImageUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.content.url
    );
  }

  onImageLoad(): void {
    console.log('image loaded Successfully!!!!');
  }
}
