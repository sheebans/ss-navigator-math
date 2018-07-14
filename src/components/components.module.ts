import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header/header';
import { BadgeInfoComponent } from './badge-info/badge-info';
import { Deeplinks } from '@ionic-native/deeplinks';
import { CourseMapProvider } from '@providers/api/course-map';
import { PipesModule } from '@pipes/pipes.module';
import { MilestoneCardComponent } from './dashboard/milestone-card/milestone-card';
import { DashboardAccordionComponent } from './dashboard/accordion-dashboard/accordion-dashboard';
import {
  PLAYER_COMPONENTS,
  PLAYER_CONTENT_FORMAT_COMPONENTS
} from '@components/player/player.component.imports';

@NgModule({
  declarations: [
    HeaderComponent,
    BadgeInfoComponent,
    MilestoneCardComponent,
    DashboardAccordionComponent,
    PLAYER_COMPONENTS
  ],
  imports: [IonicModule, TranslateModule.forChild(), PipesModule],
  exports: [
    HeaderComponent,
    BadgeInfoComponent,
    MilestoneCardComponent,
    DashboardAccordionComponent,
    PLAYER_COMPONENTS
  ],
  entryComponents: [BadgeInfoComponent, PLAYER_CONTENT_FORMAT_COMPONENTS],
  providers: [Deeplinks, CourseMapProvider]
})
export class ComponentsModule {}
