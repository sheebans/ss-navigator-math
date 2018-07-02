import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ENV } from '@app/env';
import { AuthProvider } from '../../providers';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  signInForm: FormGroup;

  showPage: boolean = true;

  password: string;

  username: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    private formBuilder: FormBuilder,
    private inAppBrowser: InAppBrowser,
    private authProvider: AuthProvider,
    private storage: Storage,
    private events: Events,
    private toastCtrl: ToastController,
    private translate: TranslateService
  ) {
    this.signInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  doLogin() {
    this.authProvider
      .signInWithCredential(this.username, this.password)
      .subscribe(
        sessionModel => {
          this.storage.set('session', sessionModel);
          this.events.publish('auth:loginCompleted', sessionModel);
        },
        onerror => {
          this.translate
            .get('SIGN_IN_CREDENTIALS_NOT_VALID')
            .subscribe(value => {
              let toast = this.toastCtrl.create({
                message: value,
                duration: 3000,
                position: 'top'
              });
              toast.present();
            });
        }
      );
  }

  doGoogleLogin() {
    this.showPage = false;
    const googleSignUrl = `${
      ENV.API_END_POINT
    }/api/nucleus-auth-idp/v1/google?redirectURL=${ENV.APP_SSO_REDIRECT_URL}`;
    const browser = this.inAppBrowser.create(
      googleSignUrl,
      '_blank',
      'location=no,EnableViewPortScale=yes,toolbar=no,closebuttoncaption=Close'
    );
    browser.on('loadstart').subscribe(event => {
      if (event.url != null && event.url.indexOf('access_token') > -1) {
        browser.close();
        const token: string = event.url.split('access_token=')[1];
        const accessToken: string = token.slice(0, -1);
        this.authProvider.signInWithToken(accessToken).subscribe(session => {
          this.storage.set('session', session);
          this.events.publish('auth:loginCompleted', session);
        });
      }
    });
  }

  ionViewDidEnter() {
    this.menu.enable(false);
  }
}
