import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import {AboutPage} from "../pages/about/about";
import { FilesPage } from "../pages/files/files";

import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";


//To uploading
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from "@ionic-native/file";



export const config = {
  apiKey: "AIzaSyBgESN0htVO9u6VQif45FrQU8yrmE3yBJY",
  authDomain: "motivator-mht.firebaseapp.com",
  databaseURL: "https://motivator-mht.firebaseio.com",
  projectId: "motivator-mht",
  storageBucket: "motivator-mht.appspot.com",
  messagingSenderId: "209809022339"
};

//Routers
/*
const ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: 'login-page' },
  { path: 'quote/:id', component: 'home-page' },
  { path: 'admin', component: 'settings-page' }
];
*/
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AboutPage,
    FilesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AboutPage,
    FilesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileChooser,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ]
})
export class AppModule {}
