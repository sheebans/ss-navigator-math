import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactUsPage } from './contact-us';
import { TranslateModule } from '@ngx-translate/core';
import { LookupsProvider } from '@providers/api/core/lookups';

@NgModule({
  declarations: [ContactUsPage],
  imports: [
    IonicPageModule.forChild(ContactUsPage),
    TranslateModule.forChild()
  ],
  exports: [ContactUsPage],
  providers: [LookupsProvider]
})
export class ContactUsPageModule {}
