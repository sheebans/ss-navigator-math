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
  CollectionPlayerOverviewComponent,
  CollectionPlayerComponent,
  AssessmentPlayerComponent,
  YoutubeVideoFormatComponent,
  VimeoVideoFormatComponent,
  WebpageFormatComponent,
  PdfFormatComponent,
  ContentPlayerComponent,
  CollectionPlaylistComponent
} from './player';

@NgModule({
  declarations: [
    HeaderComponent,
    BadgeInfoComponent,
    CollectionPlayerOverviewComponent,
    CollectionPlayerComponent,
    MilestoneCardComponent,
    DashboardAccordionComponent,
    AssessmentPlayerComponent,
    YoutubeVideoFormatComponent,
    VimeoVideoFormatComponent,
    WebpageFormatComponent,
    PdfFormatComponent,
    CollectionPlaylistComponent,
    ContentPlayerComponent
  ],
  imports: [IonicModule, TranslateModule.forChild(), PipesModule],
  exports: [
    HeaderComponent,
    BadgeInfoComponent,
    CollectionPlayerOverviewComponent,
    CollectionPlayerComponent,
    AssessmentPlayerComponent,
    MilestoneCardComponent,
    DashboardAccordionComponent,
    YoutubeVideoFormatComponent,
    VimeoVideoFormatComponent,
    WebpageFormatComponent,
    PdfFormatComponent,
    CollectionPlaylistComponent,
    ContentPlayerComponent
  ],
  entryComponents: [BadgeInfoComponent],
  providers: [Deeplinks, CourseMapProvider]
})
export class ComponentsModule {}
