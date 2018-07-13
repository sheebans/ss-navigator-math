import { Component, Input, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ContentFormatComponent } from '@components/player';

@Component({
  selector: 'pdf-format',
  templateUrl: 'pdf-format.html'
})
export class PdfFormatComponent implements ContentFormatComponent, OnInit {
  pdfPlayerUrl: string = 'https://docs.google.com/gview?embedded=true&url=';

  @Input() content: any;

  @Input() isActive: boolean;

  trustedPdfUrl: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    const pdfUrl = `${this.pdfPlayerUrl}${this.content.url}`;
    this.trustedPdfUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
      pdfUrl
    );
  }

  onPdfLoad(): void {
    console.log('pdf loaded Successfully!!!!');
  }
}
