import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header/header';
import { BadgeInfoComponent } from './badge-info/badge-info';
import { Deeplinks } from '@ionic-native/deeplinks';
import { CourseMapProvider } from '@providers/api/course-map';
import { UserLocationProvider } from '@providers/api/user-location';

import { PipesModule } from '@pipes/pipes.module';
import {
  PLAYER_COMPONENTS,
  PLAYER_CONTENT_FORMAT_COMPONENTS
} from '@components/player/player.component.imports';
import {
  MilestoneListComponent,
  MilestoneAccordionComponent,
  MilestoneComponent
} from './milestone';

@NgModule({
  declarations: [
    HeaderComponent,
    BadgeInfoComponent,
    MilestoneListComponent,
    MilestoneAccordionComponent,
    MilestoneComponent,
    PLAYER_COMPONENTS
  ],
  imports: [IonicModule, TranslateModule.forChild(), PipesModule],
  exports: [
    HeaderComponent,
    BadgeInfoComponent,
    MilestoneListComponent,
    MilestoneAccordionComponent,
    MilestoneComponent,
    PLAYER_COMPONENTS
  ],
  entryComponents: [BadgeInfoComponent, PLAYER_CONTENT_FORMAT_COMPONENTS],
  providers: [Deeplinks, CourseMapProvider, UserLocationProvider]
})
export class ComponentsModule {}
