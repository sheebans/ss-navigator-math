import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header/header';
import { Deeplinks } from '@ionic-native/deeplinks';

@NgModule({
  declarations: [HeaderComponent],
  imports: [IonicModule, TranslateModule.forChild()],
  exports: [HeaderComponent],
  providers: [Deeplinks]
})
export class ComponentsModule {}
