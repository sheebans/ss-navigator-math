import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { DashboardPage } from './dashboard';

@NgModule({
  declarations: [DashboardPage],
  imports: [
    IonicPageModule.forChild(DashboardPage),
    TranslateModule.forChild(),
    ComponentsModule
  ],
  exports: [DashboardPage]
})
export class DashboardPageModule {}
