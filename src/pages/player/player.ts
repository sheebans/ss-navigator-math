import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html'
})
export class PlayerPage {
  id: string;

  type: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = navParams.get('id') || '6815115b-2e77-439e-83a5-3b2a0284ba74';
    this.type = navParams.get('type') || 'collection';
  }
}
