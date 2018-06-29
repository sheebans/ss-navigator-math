import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { ProficiencyPage } from './proficiency';

@NgModule({
  declarations: [ProficiencyPage],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ProficiencyPage),
    TranslateModule.forChild()
  ],
  exports: [ProficiencyPage]
})
export class ProficiencyPageModule {}
