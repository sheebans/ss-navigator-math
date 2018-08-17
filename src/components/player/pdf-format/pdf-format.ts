import { Component, Input } from '@angular/core';
import { ContentFormatComponent } from '@components/player/content-format.component';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { FileTransferProvider } from '@providers/util/file-transfer.service';

@Component({
  selector: 'pdf-format',
  templateUrl: 'pdf-format.html',
  providers: [FileTransferProvider]
})
export class PdfFormatComponent implements ContentFormatComponent {
  @Input()
  content: any;

  @Input()
  isActive: boolean;

  constructor(
    private document: DocumentViewer,
    private fileTransfer: FileTransferProvider
  ) {}

  loadPdf() {
    const pdfUrl = `${this.content.url}`;
    this.fileTransfer.transfer(pdfUrl).then(url => {
      this.document.viewDocument(url, 'application/pdf', {});
    });
  }
}
