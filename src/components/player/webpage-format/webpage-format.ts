import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ContentFormatComponent } from '@components/player/content-format.component';
import { Loading, LoadingController } from 'ionic-angular';

@Component({
  selector: 'webpage-format',
  templateUrl: 'webpage-format.html'
})
export class WebpageFormatComponent implements ContentFormatComponent, OnInit {
  @Input() content: any;

  @Input() isActive: boolean;

  trustedWebsiteUrl: SafeResourceUrl;

  loading: Loading;

  constructor(
    private domSanitizer: DomSanitizer,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.trustedWebsiteUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      this.content.url
    );
  }

  onWebpageLoad(): void {
    if (this.loading) {
      this.loading.dismiss();
      this.loading = null;
    } else {
      this.loading = this.loadingCtrl.create({
        content: ''
      });
      this.loading.present();
    }
    console.log('webpage loaded Successfully!!!!');
  }
}
