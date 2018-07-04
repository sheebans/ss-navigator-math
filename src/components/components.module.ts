import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header/header';
import { Deeplinks } from '@ionic-native/deeplinks';
import { CollectionPlayerOverviewComponent } from './collection-player-overview/collection-player-overview';

@NgModule({
  declarations: [HeaderComponent, CollectionPlayerOverviewComponent],
  imports: [IonicModule, TranslateModule.forChild()],
  exports: [HeaderComponent, CollectionPlayerOverviewComponent],
  providers: [Deeplinks]
})
export class ComponentsModule {}
