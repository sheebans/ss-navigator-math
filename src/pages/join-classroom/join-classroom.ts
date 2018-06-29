import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder
  ) {
    this.joinUsForm = this.formBuilder.group({
      classCode: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinClassroomPage');
  }

  gotoDashboard() {
    this.navCtrl.setRoot('LoginPage');
  }

  gotoContactUs() {
    this.navCtrl.push('ContactUsPage');
  }
}
