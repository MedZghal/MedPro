import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
/*
  Generated class for the Login8 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login-8',
  templateUrl: 'login-8.html'
})
export class Login8 {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Login8 Page');
  }
  Connecte() {
    this.navCtrl.push(LoginPage);
  }
}
