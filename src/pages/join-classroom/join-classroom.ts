import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Events,
  LoadingController
} from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AuthProvider } from '../../providers/api/auth';
import { ToastService } from '../../providers/util/toast.service';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-join-classroom',
  templateUrl: 'join-classroom.html'
})
export class JoinClassroomPage {
  joinUsForm: FormGroup;

  classCode: string;

  showPage: boolean = true;

  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private inAppBrowser: InAppBrowser,
    private authProvider: AuthProvider,
    private storage: Storage,
    private events: Events,
    private toastService: ToastService,
    private translate: TranslateService,
    private loadingCtrl: LoadingController
  ) {
    this.joinUsForm = this.formBuilder.group({
      classCode: ['', Validators.required]
    });
    this.loading = this.loadingCtrl.create({
      content: ''
    });
  }

  gotoDashboard() {
    this.loading.present();
    this.authProvider.initLogin(this.classCode).subscribe(
      initLoginModel => {
        if (initLoginModel.status_code == 303) {
          this.showPage = false;
          const browser = this.inAppBrowser.create(
            initLoginModel.redirect_url,
            '_blank',
            'location=no,EnableViewPortScale=yes,toolbar=no,closebuttoncaption=Close'
          );
          browser.on('loadstart').subscribe(event => {
            if (event.url != null && event.url.indexOf('access_token') > -1) {
              browser.close();
              const accessToken: string = event.url.split('access_token=')[1];
              this.authProvider.signInWithToken(accessToken).subscribe(
                session => {
                  this.loading.dismiss();
                  this.storage.set('session', session);
                  this.events.publish('auth:loginCompleted', session);
                },
                onerror => {
                  this.loading.dismiss();
                  this.showPage = true;
                  this.translate.get('FAILED_TO_LOGIN').subscribe(value => {
                    this.toastService.presentToast(value);
                  });
                }
              );
            }
          });
          browser.on('loaderror').subscribe(event => {
            this.loading.dismiss();
            this.showPage = true;
            this.translate.get('FAILED_TO_LOGIN').subscribe(value => {
              this.toastService.presentToast(value);
            });
          });
        } else {
          this.loading.dismiss();
          this.navCtrl.push('LoginPage');
        }
      },
      onerror => {
        this.loading.dismiss();
        this.toastService.presentToast(onerror.error.message);
      }
    );
  }

  gotoContactUs() {
    this.navCtrl.push('ContactUsPage');
  }
}
