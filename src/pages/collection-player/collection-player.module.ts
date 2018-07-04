import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectionPlayerPage } from './collection-player';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [CollectionPlayerPage],
  imports: [IonicPageModule.forChild(CollectionPlayerPage), ComponentsModule]
})
export class CollectionPlayerPageModule {}
