import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CollectionPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-collection-player',
  templateUrl: 'collection-player.html'
})
export class CollectionPlayerPage {
  valueText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.valueText = 'Hello World!!';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectionPlayerPage');
  }
}
