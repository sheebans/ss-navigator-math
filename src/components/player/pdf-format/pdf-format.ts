import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ContentFormatComponent } from '@components/player/content-format.component';
import { LoadingService } from '@providers/util/loading.service';

@Component({
  selector: 'pdf-format',
  templateUrl: 'pdf-format.html'
})
export class PdfFormatComponent implements ContentFormatComponent, OnInit {
  pdfPlayerUrl: string = 'https://docs.google.com/gview?embedded=true&url=';

  @Input() content: any;

  @Input() isActive: boolean;

  trustedPdfUrl: SafeResourceUrl;

  loading: boolean;

  constructor(
    private domSanitizer: DomSanitizer,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    const pdfUrl = `${this.pdfPlayerUrl}${this.content.url}`;
    this.trustedPdfUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      pdfUrl
    );
  }

  onPdfLoad(): void {
    if (this.loading) {
      this.loadingService.dismiss();
      this.loading = false;
    } else {
      this.loadingService.present();
      this.loading = true;
    }
    console.log('pdf loaded Successfully!!!!');
  }
}
