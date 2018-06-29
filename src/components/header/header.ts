import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
  headerModel: any;

  constructor(public navCtrl: NavController) {}
  @Input()
  set header(headerModel: any) {
    console.log(headerModel);
    this.headerModel = headerModel;
  }
}
