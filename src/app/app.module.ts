import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AppVersion } from '@ionic-native/app-version';
import { Base64 } from '@ionic-native/base64';
import { Keyboard } from '@ionic-native/keyboard';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavMathApp, GlobalErrorHandler, AppAuth } from './';
import { Device } from '@ionic-native/device';
import { Firebase } from '@ionic-native/firebase';
import { ComponentsModule } from '../components/components.module';
import { AuthProvider, ApiProvider, LookupsProvider } from '../providers';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [NavMathApp],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
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
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [NavMathApp],
  providers: [
    StatusBar,
    SplashScreen,
    AppVersion,
    Device,
    Firebase,
    AppAuth,
    Base64,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    ApiProvider,
    AuthProvider,
    LookupsProvider,
    Keyboard
  ]
})
export class AppModule {}
