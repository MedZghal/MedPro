import { NgModule, ErrorHandler,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocalNotifications} from '@ionic-native/local-notifications';
import { IonicApp, IonicModule, IonicErrorHandler,Slides } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Calendar} from '@ionic-native/calendar';

import {BackandService} from '@backand/angular2-sdk'
import { LoginPage } from '../pages/login/login';
import { Login8 } from '../pages/login-8/login-8';
import { RdvPage,DetailsRdv } from '../pages/rdv/rdv';
import {ParametrePage} from '../pages/parametre/parametre';
import {StatistiquePage} from '../pages/Statistique/statistique';
import { ConsultPage,DetailsConsult } from '../pages/consult/consult';
import { PatientPage,Profile } from '../pages/patient/patient';

//import { Ng2HighchartsModule } from 'ng2-highcharts';

import {HttpModule} from '@angular/http'

import io from 'socket.io-client';
window["io"] = io;




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    Login8,
    PatientPage,
    Profile,
    RdvPage,
    ConsultPage,
    DetailsConsult,
    DetailsRdv,
    ParametrePage,
    StatistiquePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [ IonicApp ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    Login8,
    PatientPage,
    Profile,
    RdvPage,
    ConsultPage,
    DetailsConsult,
    DetailsRdv,
    ParametrePage,
    StatistiquePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Calendar,
    LocalNotifications,
    Slides,
    BackandService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
