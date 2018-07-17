import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ContentFormatComponent } from '@components/player/content-format.component';
import { LoadingService } from '@providers/util/loading.service';

@Component({
  selector: 'webpage-format',
  templateUrl: 'webpage-format.html'
})
export class WebpageFormatComponent implements ContentFormatComponent, OnInit {
  @Input() content: any;

  @Input() isActive: boolean;

  trustedWebsiteUrl: SafeResourceUrl;

  loading: boolean;

  constructor(
    private domSanitizer: DomSanitizer,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.trustedWebsiteUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.content.url
    );
  }

  onWebpageLoad(): void {
    if (this.loading) {
      this.loadingService.dismiss();
      this.loading = false;
    } else {
      this.loadingService.present();
      this.loading = true;
    }
    console.log('webpage loaded Successfully!!!!');
  }
}
