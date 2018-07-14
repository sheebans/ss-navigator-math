import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerPage } from './player';
import { ComponentsModule } from '@components/components.module';
import { PipesModule } from '@pipes/pipes.module';
import { ClassesProvider } from '@providers/api/classes';
import { CoursesProvider } from '@providers/api/courses';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

@NgModule({
  declarations: [PlayerPage],
  imports: [
    IonicPageModule.forChild(PlayerPage),
    ComponentsModule,
    PipesModule
  ],
  providers: [
    ClassesProvider,
    CoursesProvider,
    InAppBrowser,
    NativePageTransitions
  ]
})
export class PlayerPageModule {}
