import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { BadgeInfoComponent } from './badge-info/badge-info';
import { Deeplinks } from '@ionic-native/deeplinks';
import { CourseMapProvider } from '@providers/api/core/course-map';
import { UserLocationProvider } from '@providers/api/analytics/user-location';

import { PipesModule } from '@pipes/pipes.module';
import {
  PLAYER_COMPONENTS,
  PLAYER_CONTENT_FORMAT_COMPONENTS
} from '@components/player/player.component.imports';
import {
  HEADER_COMPONENTS,
  HEADER_TITLE_COMPONENTS
} from '@components/header/header.component.imports';

import {
  MilestoneListComponent,
  MilestoneAccordionComponent,
  MilestoneComponent
} from './milestone';

@NgModule({
  declarations: [
    BadgeInfoComponent,
    MilestoneListComponent,
    MilestoneAccordionComponent,
    MilestoneComponent,
    HEADER_COMPONENTS,
    PLAYER_COMPONENTS
  ],
  imports: [IonicModule, TranslateModule.forChild(), PipesModule],
  exports: [
    BadgeInfoComponent,
    MilestoneListComponent,
    MilestoneAccordionComponent,
    MilestoneComponent,
    HEADER_COMPONENTS,
    PLAYER_COMPONENTS
  ],
  entryComponents: [
    BadgeInfoComponent,
    PLAYER_CONTENT_FORMAT_COMPONENTS,
    HEADER_TITLE_COMPONENTS
  ],
  providers: [Deeplinks, CourseMapProvider, UserLocationProvider]
})
export class ComponentsModule {}
