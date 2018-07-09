import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header/header';
import { Deeplinks } from '@ionic-native/deeplinks';
import { PipesModule } from '@pipes/pipes.module';
import {
  CollectionPlayerOverviewComponent,
  CollectionPlayerComponent,
  AssessmentPlayerComponent,
  YoutubePlayerComponent,
  VimeoPlayerComponent,
  WebpagePlayerComponent
} from './player';

@NgModule({
  declarations: [
    HeaderComponent,
    CollectionPlayerOverviewComponent,
    CollectionPlayerComponent,
    AssessmentPlayerComponent,
    YoutubePlayerComponent,
    VimeoPlayerComponent,
    WebpagePlayerComponent
  ],
  imports: [IonicModule, TranslateModule.forChild(), PipesModule],
  exports: [
    HeaderComponent,
    CollectionPlayerOverviewComponent,
    CollectionPlayerComponent,
    AssessmentPlayerComponent,
    YoutubePlayerComponent,
    VimeoPlayerComponent,
    WebpagePlayerComponent
  ],
  providers: [Deeplinks]
})
export class ComponentsModule {}
