import { FormsModule } from '@angular/forms';
import {NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClientModule} from "@angular/common/http";
import { BackendProvider } from '../providers/backend/backend';
import {PatientPageModule} from "../pages/patient/patient.module";
import {LoginbackendPageModule} from "../pages/loginbackend/loginbackend.module";
import {SplashPageModule} from "../pages/splash/splash.module";
import {HomePageModule} from "../pages/home/home.module";
import {NotificationsPage} from "../pages/notifications/notifications";
import {Keyboard} from '@ionic-native/keyboard';
import {AccountPageModule} from "../pages/account/account.module";
import {ProfilePageModule} from "../pages/profile/profile.module";
import {DetailPageModule} from "../pages/detail/detail.module";
import { ChatProvider } from '../providers/chat/chat';
import {ChatPageModule} from "../pages/chat/chat.module";
import { StompService } from 'ng2-stomp-service';
import {AgendaPageModule} from "../pages/agenda/agenda.module";
import {PiecePageModule} from "../pages/piece/piece.module";
import {PhotoViewer} from "@ionic-native/photo-viewer";
import {ChartsPageModule} from "../pages/charts/charts.module";
import {ItemRibbonPageModule} from "../pages/item-ribbon/item-ribbon.module";
import {IonicStorageModule} from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    NotificationsPage
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    PatientPageModule,
    LoginbackendPageModule,
    SplashPageModule,
    HomePageModule,
    AccountPageModule,
    ProfilePageModule,
    DetailPageModule,
    ChatPageModule,
    AgendaPageModule,
    PiecePageModule,
    ChartsPageModule,
    ItemRibbonPageModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp,{
      iconMode: 'md',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'top',
      // pageTransition: 'ios-transition',
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    NotificationsPage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    BackendProvider,
    ChatProvider,
    StompService,
    PhotoViewer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})

export class AppModule {}
