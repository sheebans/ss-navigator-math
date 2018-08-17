import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Platform } from 'ionic-angular';
import { Md5 } from 'ts-md5/dist/md5';
import { LoadingController, Loading } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class FileTransferProvider {
  loading: Loading;

  constructor(
    public loadingCtrl: LoadingController,
    public translate: TranslateService,
    public file: File,
    public fileTransfer: FileTransfer,
    public platform: Platform
  ) {}

  transfer(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      let path = null;
      if (this.platform.is('ios')) {
        path = this.file.documentsDirectory;
      } else if (this.platform.is('android')) {
        path = this.file.dataDirectory;
      } else {
        path = this.file.externalDataDirectory;
      }
      this.hashFileName(url).then(filename => {
        let filePath = path + filename;
        this.file.checkFile(path, filename).then(
          result => {
            resolve(filePath);
          },
          error => {
            const fileTransfer = this.fileTransfer.create();
            this.present();
            fileTransfer.download(url, filePath, true).then(
              entry => {
                this.dismiss();
                let url = entry.toURL();
                resolve(url);
              },
              error => {
                reject(error);
              }
            );
          }
        );
      });
    });
  }

  hashFileName(url: string): Promise<string> {
    return new Promise(resolve => {
      resolve(Md5.hashStr(url) + '.pdf');
    });
  }

  present() {
    this.translate.get('DOWNLOAD_INFO').subscribe(res => {
      console.log(res);
      if (!this.loading) {
        this.loading = this.loadingCtrl.create({
          content: res
        });
        this.loading.present();
      }
    });
  }

  dismiss() {
    this.loading.dismiss();
  }
}
