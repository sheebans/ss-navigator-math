import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeaderTitleContextComponent } from '@components/header/header-title-context.component';
import { HeaderTitleContextModel } from '@models/app/header/header-title-context';

@Component({
  selector: 'default-header-title',
  templateUrl: 'default-header-title.html'
})
export class DefaultHeaderTitleComponent
  implements HeaderTitleContextComponent {
  @Input() context: HeaderTitleContextModel;

  constructor(public navCtrl: NavController) {}
}
