import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { Deeplinks } from '@ionic-native/deeplinks';
import { PipesModule } from '@pipes/pipes.module';
import {
  PLAYER_COMPONENTS,
  PLAYER_CONTENT_FORMAT_COMPONENTS
} from '@components/player/player.component.imports';
import {
  HEADER_COMPONENTS,
  HEADER_TITLE_COMPONENTS
} from '@components/header/header.component.imports';
import { DASHBOARD_COMPONENTS } from '@components/dashboard/dashboard.component.imports.ts';

@NgModule({
  declarations: [DASHBOARD_COMPONENTS, HEADER_COMPONENTS, PLAYER_COMPONENTS],
  imports: [IonicModule, TranslateModule.forChild(), PipesModule],
  exports: [DASHBOARD_COMPONENTS, HEADER_COMPONENTS, PLAYER_COMPONENTS],
  entryComponents: [PLAYER_CONTENT_FORMAT_COMPONENTS, HEADER_TITLE_COMPONENTS],
  providers: [Deeplinks]
})
export class ComponentsModule {}
