import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from "@angular/common/http";

import { MyApp } from './app.component';
import {LoginPage} from "../pages/login/login";

import { config } from './app.fireconfig';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AuthProvider } from '../providers/auth/auth';
import { NewgamePage } from "../pages/newgame/newgame";
import { CanvasDraw } from "../components/canvas-draw/canvas-draw";
import { UserProvider } from '../providers/user/user';
import { ImghandlerProvider } from '../providers/imghandler/imghandler';

import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    NewgamePage,
    CanvasDraw,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    NewgamePage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthProvider,
    UserProvider,
    ImghandlerProvider,
    File,
    FilePath,
    FileChooser
  ]
})
export class AppModule {}
