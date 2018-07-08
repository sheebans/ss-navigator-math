import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header/header';
import { Deeplinks } from '@ionic-native/deeplinks';
import { CollectionPlayerOverviewComponent } from './player/collection-player-overview/collection-player-overview';
import { CollectionPlayerComponent } from './player/collection-player/collection-player';
import { AssessmentPlayerComponent } from './player/assessment-player/assessment-player';
import { PipesModule } from '@pipes/pipes.module';

@NgModule({
  declarations: [
    HeaderComponent,
    CollectionPlayerOverviewComponent,
    CollectionPlayerComponent,
    AssessmentPlayerComponent
  ],
  imports: [IonicModule, TranslateModule.forChild(), PipesModule],
  exports: [
    HeaderComponent,
    CollectionPlayerOverviewComponent,
    CollectionPlayerComponent,
    AssessmentPlayerComponent
  ],
  providers: [Deeplinks]
})
export class ComponentsModule {}
