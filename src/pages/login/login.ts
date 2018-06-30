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

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  signInForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    private formBuilder: FormBuilder,
    private inAppBrowser: InAppBrowser,
    private authProvider: AuthProvider,
    private storage: Storage
  ) {
    this.signInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  doLogin() {
    this.navCtrl.setRoot('DashboardPage');
  }

  doGoogleLogin() {
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
        const token: string = event.url.split('access_token=')[1];
        const accessToken: string = token.slice(0, -1);
        this.authProvider.signInWithToken(accessToken).subscribe(session => {
          browser.close();
          window.alert(session.username);
          this.navCtrl.setRoot('DashboardPage');
          this.storage.set('session', session);
        });
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewDidEnter() {
    //to disable menu, or
    this.menu.enable(false);
  }
}
