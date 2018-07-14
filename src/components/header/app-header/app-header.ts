import { Component, Input, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeaderContextModel } from '@models/app/header/header-context';

@Component({
  selector: 'app-header',
  templateUrl: 'app-header.html'
})
export class HeaderComponent implements OnInit {
  @Input() context: HeaderContextModel;

  constructor(public navCtrl: NavController) {}

  ngOnInit() {
    console.log(console.log(this.context));
  }
}
