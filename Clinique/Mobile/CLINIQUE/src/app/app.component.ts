import {Component, ViewChild} from '@angular/core';
import {Events, MenuController, Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SplashPage} from "../pages/splash/splash";
import {LoginbackendPage} from "../pages/loginbackend/loginbackend";
import { Keyboard} from '@ionic-native/keyboard';
import {ProfilePage} from "../pages/profile/profile";
import {ChartsPage} from "../pages/charts/charts";
import { Storage } from '@ionic/storage';
import * as moment from "moment";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = SplashPage;
  parametres;any;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public keyboard: Keyboard,
    public events: Events,
    public menuCtrl: MenuController,
    private storage: Storage) {
    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      statusBar.overlaysWebView(false);

      //*** Control Keyboard
      keyboard.disableScroll(true);
      splashScreen.hide();
   });
    moment.locale('zh-cn');
    this.storage.set('media','[]');
    this.events.subscribe('parametres:created', (parametres, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Welcome', parametres, 'at', time);
      this.parametres = parametres;
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginbackendPage);
  }

  pushProfile(){
    this.menuCtrl.toggle();
    this.nav.push(ProfilePage);
  }

  callstats(){
    this.menuCtrl.toggle();
    this.nav.push(ChartsPage);
  }
}
