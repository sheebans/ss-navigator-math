import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header/header';
import { BadgeInfoComponent } from './badge-info/badge-info';
import { Deeplinks } from '@ionic-native/deeplinks';
import { CollectionPlayerOverviewComponent } from './player/collection-player-overview/collection-player-overview';
import { CollectionPlayerComponent } from './player/collection-player/collection-player';
import { AssessmentPlayerComponent } from './player/assessment-player/assessment-player';
import { MilestoneCardComponent } from './dashboard/milestone-card/milestone-card';
import { DashboardAccordionComponent } from './dashboard/accordion-dashboard/accordion-dashboard';
import { PipesModule } from '@pipes/pipes.module';

@NgModule({
  declarations: [
    HeaderComponent,
    BadgeInfoComponent,
    CollectionPlayerOverviewComponent,
    CollectionPlayerComponent,
    MilestoneCardComponent,
    DashboardAccordionComponent,
    AssessmentPlayerComponent
  ],
  imports: [IonicModule, TranslateModule.forChild(), PipesModule],
  exports: [
    HeaderComponent,
    BadgeInfoComponent,
    CollectionPlayerOverviewComponent,
    CollectionPlayerComponent,
    AssessmentPlayerComponent,
    MilestoneCardComponent,
    DashboardAccordionComponent
  ],
  entryComponents: [BadgeInfoComponent],
  providers: [Deeplinks]
})
export class ComponentsModule {}
