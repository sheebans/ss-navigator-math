import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header/header';
@NgModule({
  declarations: [HeaderComponent],
  imports: [IonicModule, TranslateModule.forChild()],
  exports: [HeaderComponent]
})
export class ComponentsModule {}
