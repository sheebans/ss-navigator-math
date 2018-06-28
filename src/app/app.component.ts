import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';
import { WelcomePage, ProficiencyPage, DashboardPage } from '../pages';
import { AppVersion } from '@ionic-native/app-version';

@Component({
  templateUrl: 'app.html'
})
export class NavMathApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{ title: string; component: any; icon: string }>;

  version: string = '0.0.0';

  constructor(
    private translate: TranslateService,
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private appVersion: AppVersion
  ) {
    this.initializeApp();

    this.pages = [
      { title: 'Dashboard', component: DashboardPage, icon: 'icon-dashboard' },
      { title: 'Proficiency', component: ProficiencyPage, icon: 'star' },
      {
        title: 'Prefernces',
        component: ProficiencyPage,
        icon: 'icon-preferences'
      },
      { title: 'About Me', component: ProficiencyPage, icon: 'icon-about' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (this.platform.is('cordova')) {
        // make your native calls
        this.statusBar.styleDefault();
        this.splashScreen.hide();
        this.appVersion.getVersionNumber().then(version => {
          this.version = version;
        });
      } else {
        // handle thing accordingly
      }
    });
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
