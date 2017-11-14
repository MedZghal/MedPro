import {Component} from '@angular/core';
import {NavController,ToastController,AlertController} from 'ionic-angular';
import 'rxjs/Rx'
import { BackandService } from '@backand/angular2-sdk';
import { TabsPage } from '../../pages/tabs/tabs';

@Component({
    templateUrl: 'login.html',
    selector: 'page-login',
})
export class LoginPage {

  username:string = 'med@gmail.com';
  password:string = '123456';
  auth_type:string = "N/A";
  is_auth_error:boolean = false;
  public  static auth_status:string = null;
  public  static loggedInUser: string = '';

  oldPassword: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';

  constructor(private backand: BackandService,public navCtrl: NavController,private toastCtrl: ToastController,private alertCtrl: AlertController) {
    this.backand.user.getUserDetails().then(
      (res: any) => {
        if(res.data) {
          LoginPage.loggedInUser = res.data.username;
          LoginPage.auth_status = 'OK';
          this.auth_type = res.data.token_type == 'Anonymous' ? 'Anonymous' : 'Token';
        }
      },
      (err: any) => {
        LoginPage.loggedInUser = null;
        LoginPage.auth_status = null;
        this.auth_type = null;
      }
    );
  }


  public getAuthTokenSimple() {
    this.auth_type = 'Token';
    this.backand.signin(this.username, this.password)
      .then((res: any) => {
          LoginPage.auth_status = 'OK';
        this.is_auth_error = false;
          LoginPage.loggedInUser = res.data.username;
        this.username = '';
        this.password = '';
        this.navCtrl.setRoot(TabsPage);
      },
      (error: any) => {
        let errorMessage: string = error.data.error_description;
        LoginPage.auth_status = `Error: ${errorMessage}`;
        this.is_auth_error = true;
        LoginPage.auth_status = 'ERROR';
        this.showAlert(errorMessage,'alert');
      }
    );
  }

  public useAnonymousAuth() {
    this.backand.useAnonymousAuth()
      .then((res: any) => {
          LoginPage.auth_status = 'OK';
        this.is_auth_error = false;
          LoginPage.loggedInUser = res.data.username;
      },
      (error: any) => {
        let errorMessage: string = error.data.error_description;
        LoginPage.auth_status = `Error: ${errorMessage}`;
        this.is_auth_error = true;
        LoginPage.auth_status = 'ERROR';
      });
  }

  public socialSignin(provider: string) {
    this.backand.socialSignin(provider)
      .then((res: any) => {
          LoginPage.auth_status = 'OK';
        this.is_auth_error = false;
          LoginPage.loggedInUser = res.data.username;
      },
      (error: any) => {
        let errorMessage: string = error.data.error_description;
        LoginPage.auth_status = `Error: ${errorMessage}`;
        this.is_auth_error = true;
        LoginPage.auth_status = 'ERROR';
      }
    );
  }

  public signOut() {
    LoginPage.auth_status = null;
    this.backand.signout();
  }


  public changePassword() {
    if (this.newPassword != this.confirmNewPassword){
      alert('Passwords should match');
      return;
    }
    this.backand.changePassword(this.oldPassword, this.newPassword)
      .then((res: any) => {
        alert('Password changed');
        this.oldPassword = this.newPassword = this.confirmNewPassword = '';
      },
      (err: any) => {
        alert(err.data)
      }
    );
  }

  public  showAlert(msg ,type) {
    if(type=="alert") {
      let alert = this.alertCtrl.create({
        title: 'Notification !!',
        subTitle: msg,
        buttons: ['OK']
      });
      alert.present();
    }
    else
    {
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 2000,
        cssClass: "toast-success"
      });
      toast.present();
    }
  }


}
