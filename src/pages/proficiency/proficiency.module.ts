import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ProficiencyPage } from './proficiency';

@NgModule({
  declarations: [
    ProficiencyPage,
  ],
  imports: [
    IonicPageModule.forChild(ProficiencyPage),
    TranslateModule.forChild()
  ],
  exports: [
      ProficiencyPage
  ]
})
export class ProficiencyPageModule { }
