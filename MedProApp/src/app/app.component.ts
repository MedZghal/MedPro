import { Component,ViewChild } from '@angular/core';
import { Platform,MenuController,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { BackandService } from '@backand/angular2-sdk'

import { Login8 } from '../pages/login-8/login-8';
import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

@Component({
  templateUrl: 'app.html'
})
// @Component({
//   template: `<h1>Hello World!</h1>`
// })
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = Login8;
  private Pages: any[];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private backand:BackandService,public menu: MenuController) {
    this.menu = menu;
    // set our app's pages
    this.Pages = [
      { title: 'Accueil', component: TabsPage,class:'./assets/img/white/home.png'},
      { title: 'Contact', component: ContactPage ,class:'./assets/img/white/call.png'},
      { title: 'About', component: AboutPage ,class:'./assets/img/white/responsive.png'},
      { title: 'Verrouiller', component: Login8 ,class:'./assets/img/white/blind.png'},
      { title: 'Déconnecté', component: LoginPage ,class:'./assets/img/white/lock.png'}

    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      backand.init({
        appName: 'medproapp',
        signUpToken: '2b12816f-0325-4845-bf02-e45e17336a0a',
        anonymousToken: '47d86686-5de2-438c-b024-7d65a63dfc50',
        runSocket: true,
        mobilePlatform: 'ionic'
      });
      //this.rootPage = TabsPage;
    });
  }
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
