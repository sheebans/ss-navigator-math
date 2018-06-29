import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JoinClassroomPage } from './join-classroom';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [JoinClassroomPage],
  imports: [
    IonicPageModule.forChild(JoinClassroomPage),
    TranslateModule.forChild()
  ]
})
export class JoinClassroomPageModule {}
