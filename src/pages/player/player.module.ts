import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerPage } from './player';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [PlayerPage],
  imports: [IonicPageModule.forChild(PlayerPage), ComponentsModule, PipesModule]
})
export class PlayerPageModule {}
