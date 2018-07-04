import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, MenuController } from 'ionic-angular';
import { AuthProvider } from '../../providers/api/auth';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { GooglePlus } from '@ionic-native/google-plus';
import { ToastService } from '../../providers/util/toast.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  signInForm: FormGroup;

  password: string;

  username: string;

  constructor(
    private menu: MenuController,
    private formBuilder: FormBuilder,
    private authProvider: AuthProvider,
    private storage: Storage,
    private events: Events,
    private toastService: ToastService,
    private translate: TranslateService,
    private googlePlus: GooglePlus
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
              this.toastService.presentToast(value);
            });
        }
      );
  }

  doGoogleLogin() {
    this.googlePlus
      .login({})
      .then(res => {
        const user = {
          first_name: res.givenName,
          last_name: res.familyName,
          identity_id: res.email
        };
        this.authProvider.authorize(user).subscribe(session => {
          this.storage.set('session', session);
          this.events.publish('auth:loginCompleted', session);
        });
      })
      .catch(err => this.toastService.presentToast(err.message));
  }

  ionViewDidEnter() {
    this.menu.enable(false);
  }
}
