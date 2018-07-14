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
  CollectionPlayerOverviewComponent,
  CollectionPlayerComponent,
  AssessmentPlayerComponent,
  YoutubePlayerComponent,
  VimeoPlayerComponent,
  WebpagePlayerComponent
} from './player';
import {
  MilestoneListComponent,
  MilestoneAccordionComponent,
  MilestoneComponent
} from './milestone';
import { MilestoneMenuComponent } from './milestone-menu/milestone-menu';

@NgModule({
  declarations: [
    HeaderComponent,
    BadgeInfoComponent,
    CollectionPlayerOverviewComponent,
    CollectionPlayerComponent,
    MilestoneListComponent,
    MilestoneAccordionComponent,
    AssessmentPlayerComponent,
    YoutubePlayerComponent,
    VimeoPlayerComponent,
    WebpagePlayerComponent,
    MilestoneComponent,
    MilestoneMenuComponent
  ],
  imports: [IonicModule, TranslateModule.forChild(), PipesModule],
  exports: [
    HeaderComponent,
    BadgeInfoComponent,
    CollectionPlayerOverviewComponent,
    CollectionPlayerComponent,
    AssessmentPlayerComponent,
    MilestoneListComponent,
    MilestoneAccordionComponent,
    YoutubePlayerComponent,
    VimeoPlayerComponent,
    WebpagePlayerComponent,
    MilestoneComponent,
    MilestoneMenuComponent
  ],
  entryComponents: [BadgeInfoComponent],
  providers: [Deeplinks, CourseMapProvider, UserLocationProvider]
})
export class ComponentsModule {}
