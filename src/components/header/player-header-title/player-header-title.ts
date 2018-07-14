import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeaderTitleContextComponent } from '@components/header/header-title-context.component';
import { HeaderTitleContextModel } from '@models/app/header/header-title-context';

@Component({
  selector: 'player-header-title',
  templateUrl: 'player-header-title.html'
})
export class PlayerHeaderTitleComponent implements HeaderTitleContextComponent {
  @Input() context: HeaderTitleContextModel;

  constructor(public navCtrl: NavController) {}
}
