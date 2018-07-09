import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header/header';
import { BadgeInfoComponent } from './badge-info/badge-info';
import { Deeplinks } from '@ionic-native/deeplinks';
import { CollectionPlayerOverviewComponent } from './collection-player-overview/collection-player-overview';
import { MilestoneCardComponent } from './milestone-card/milestone-card';
import { AccordionComponent } from './accordion/accordion';

@NgModule({
  declarations: [
    HeaderComponent,
    BadgeInfoComponent,
    CollectionPlayerOverviewComponent,
    MilestoneCardComponent,
    AccordionComponent
  ],
  imports: [IonicModule, TranslateModule.forChild()],
  exports: [
    HeaderComponent,
    BadgeInfoComponent,
    CollectionPlayerOverviewComponent,
    MilestoneCardComponent,
    AccordionComponent
  ],
  entryComponents: [BadgeInfoComponent],
  providers: [Deeplinks]
})
export class ComponentsModule {}
