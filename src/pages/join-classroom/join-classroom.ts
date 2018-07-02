import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  Events
} from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AuthProvider } from '../../providers';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the JoinClassroomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-join-classroom',
  templateUrl: 'join-classroom.html'
})
export class JoinClassroomPage {
  joinUsForm: FormGroup;

  classCode: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private inAppBrowser: InAppBrowser,
    private authProvider: AuthProvider,
    private storage: Storage,
    private events: Events,
    private toastCtrl: ToastController
  ) {
    this.joinUsForm = this.formBuilder.group({
      classCode: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinClassroomPage');
  }

  gotoDashboard() {
    this.authProvider.initLogin(this.classCode).subscribe(
      initLoginModel => {
        if (initLoginModel.status_code == 303) {
          const browser = this.inAppBrowser.create(
            initLoginModel.redirect_url,
            '_blank',
            'location=no,EnableViewPortScale=yes,toolbar=no,closebuttoncaption=Close'
          );
          browser.on('loadstart').subscribe(event => {
            if (event.url != null && event.url.indexOf('access_token') > -1) {
              browser.close();
              const token: string = event.url.split('access_token=')[1];
              const accessToken: string = token.slice(0, -1);
              this.authProvider
                .signInWithToken(accessToken)
                .subscribe(session => {
                  this.storage.set('session', session);
                  this.events.publish('auth:loginCompleted', session);
                });
            }
          });
        } else {
          this.navCtrl.setRoot('LoginPage');
        }
      },
      onerror => {
        let toast = this.toastCtrl.create({
          message: onerror.error.message,
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
    );
  }

  gotoContactUs() {
    this.navCtrl.push('ContactUsPage');
  }
}
