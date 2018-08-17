// Providers
import { AuthService } from '@providers/util/auth.service';
import { ToastService } from '@providers/util/toast.service';
import { LoadingService } from '@providers/util/loading.service';
import { NetworkService } from '@providers/util/network.service';
import { AuthProvider } from '@providers/api/auth/auth';
import { ModalService } from '@providers/util/modal.service';
import { RestClient } from '@providers/api/rest-client';

// Ionic native providers
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AppVersion } from '@ionic-native/app-version';
import { Keyboard } from '@ionic-native/keyboard';
import { Device } from '@ionic-native/device';
import { Firebase } from '@ionic-native/firebase';
import { Network } from '@ionic-native/network';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer } from '@ionic-native/document-viewer';

// Directives
import { DirectivesModule } from '@directives/directives.module';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '@components/components.module';
import { HttpClientModule } from '@angular/common/http';

export const MODULES = [
  BrowserModule,
  ComponentsModule,
  HttpClientModule,
  DirectivesModule
];

export const PROVIDERS = [
  ToastService,
  ModalService,
  AuthService,
  NetworkService,
  LoadingService,
  // Rest Client providers
  RestClient,
  AuthProvider,
  // Ionic native specific providers
  Firebase,
  Device,
  Keyboard,
  AppVersion,
  StatusBar,
  SplashScreen,
  Network,
  File,
  DocumentViewer,
  FileTransfer
];
