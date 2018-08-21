import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Platform } from 'ionic-angular';
import { Md5 } from 'ts-md5/dist/md5';
import { LoadingService } from '@providers/util/loading.service';
import { ToastService } from '@providers/util/toast.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class FileTransferProvider {
  constructor(
    private toastService: ToastService,
    private loadingService: LoadingService,
    private translate: TranslateService,
    private file: File,
    private fileTransfer: FileTransfer,
    private platform: Platform
  ) {}

  transfer(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const path = this.getFilePath();
      this.hashFileName(url).then(filename => {
        let filePath = `${path}${filename}`;
        this.file.checkFile(path, filename).then(
          result => {
            resolve(filePath);
          },
          error => {
            const fileTransfer = this.fileTransfer.create();
            this.loadingService.present();
            fileTransfer.download(url, filePath, true).then(
              entry => {
                this.loadingService.dismiss();
                let url = entry.toURL();
                resolve(url);
              },
              error => {
                this.loadingService.dismiss();
                this.translate.get('DOWNLOAD_FAIELD').subscribe(value => {
                  this.toastService.presentToast(value);
                });
                reject(error);
              }
            );
          }
        );
      });
    });
  }

  getFilePath() {
    let path = null;
    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else if (this.platform.is('android')) {
      path = this.file.dataDirectory;
    } else {
      path = this.file.externalDataDirectory;
    }
    return path;
  }

  hashFileName(url: string): Promise<string> {
    return new Promise(resolve => {
      resolve(`${Md5.hashStr(url)}.pdf`);
    });
  }
}
