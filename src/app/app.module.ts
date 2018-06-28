import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AppVersion } from '@ionic-native/app-version';
import { Keyboard } from '@ionic-native/keyboard';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavMathApp } from './app.component';
import { HeaderComponent } from '../components/header/header';
import { GlobalErrorHandler } from './global-error';
import { Device } from '@ionic-native/device';
import { Firebase } from '@ionic-native/firebase';

import {
  WelcomePage,
  DashboardPage,
  ProficiencyPage,
  ContactUsPage,
  JoinClassroomPage
} from '../pages';
import { AuthProvider, ApiProvider, LookupsProvider } from '../providers';

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    NavMathApp,
    WelcomePage,
    HeaderComponent,
    DashboardPage,
    ProficiencyPage,
    ContactUsPage,
    JoinClassroomPage
  ],
  imports: [
    BrowserModule,
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
  entryComponents: [
    NavMathApp,
    WelcomePage,
    HeaderComponent,
    DashboardPage,
    ProficiencyPage,
    ContactUsPage,
    JoinClassroomPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppVersion,
    Device,
    Firebase,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    ApiProvider,
    AuthProvider,
    LookupsProvider,
    Keyboard
  ]
})
export class AppModule {}
