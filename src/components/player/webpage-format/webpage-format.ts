import { Component, Input } from '@angular/core';
import { ContentFormatComponent } from '@components/player/content-format.component';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'webpage-format',
  templateUrl: 'webpage-format.html',
  providers: [InAppBrowser]
})
export class WebpageFormatComponent implements ContentFormatComponent {
  @Input()
  content: any;

  @Input()
  isActive: boolean;

  constructor(private inAppBrowser: InAppBrowser) {}

  loadWebPage() {
    this.inAppBrowser.create(
      this.content.url,
      '_blank',
      'location=no,EnableViewPortScale=yes,toolbar=no,closebuttoncaption=Close'
    );
  }
}
