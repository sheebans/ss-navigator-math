import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoinClassroomPage } from './join-classroom';
import { TranslateModule } from '@ngx-translate/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [JoinClassroomPage],
  imports: [
    IonicPageModule.forChild(JoinClassroomPage),
    TranslateModule.forChild()
  ],
  providers: [InAppBrowser]
})
export class JoinClassroomPageModule {}
