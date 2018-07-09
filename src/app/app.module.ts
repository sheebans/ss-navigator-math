import { SharedModule } from './shared.module';
import { ErrorHandler, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { NavMathApp } from './app.component';
import { GlobalErrorHandler } from './global-error';
import { MODULES, PROVIDERS } from './app.imports';
import { HttpModule } from '@angular/http';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [NavMathApp],
  imports: [
    MODULES,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(NavMathApp, {
      scrollAssist: false,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot(),
    SharedModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [NavMathApp],
  providers: [
    PROVIDERS,
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ]
})
export class AppModule {}
