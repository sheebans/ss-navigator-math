import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavMathApp } from './app.component';
import { HeaderComponent } from '../components/header/header';
import {
  WelcomePage,
  DashboardPage,
  ProficiencyPage,
  ContactUsPage,
  JoinClassroomPage
} from '../pages';
import { Auth } from '../providers';

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
    IonicModule.forRoot(NavMathApp)
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
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Auth
  ]
})
export class AppModule {}
