import {Component} from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import {NavController,ToastController,AlertController,LoadingController} from 'ionic-angular';
import 'rxjs/Rx';
import { PatientPage } from '../../pages/patient/patient';
import { StompService } from 'ng2-stomp-service';
import { Http, Headers, RequestOptions,URLSearchParams } from '@angular/http';

@Component({
    templateUrl: 'login.html',
    selector: 'page-login'
})

export class LoginPage {
  public static subscription : any[];
  username:string = '';
  password:string = '';
  is_auth_error:boolean = false;
  public  parameters:any[] = [];
  public  static auth_status:string = null;
  public  static loggedInUser: string = '';

  utilisateur: any = [];
  totalIncome = 0;
  totalExpense = 0;
  balance = 0;
  oldPassword: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';

  constructor(public loadingCtrl: LoadingController,private sqlite: SQLite,public http:Http,public stomp: StompService,public navCtrl: NavController,private toastCtrl: ToastController,private alertCtrl: AlertController) {

  }


  public ConnectSoket(username,password){

    var headers = new Headers();
    // Website you wish to allow to connect
    headers.append('Content-Type','application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers, withCredentials: true  });
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username',username);
    urlSearchParams.append('password',password);


    this.http.post("https://medproapp.ddns.net/GEMP/login",urlSearchParams.toString(),options)
      .subscribe(
        data => {
          if(data.url.toString().includes('https://medproapp.ddns.net/GEMP/login?error'))
              this.showAlert('Nom utilisateur/Mot de passe invalide veuillez essayer de nouveau?','alert');
          else {
              LoginPage.auth_status = 'OK';
              this.is_auth_error = false;

            // start connection
              this.LoginMedPro(username,password);

          }
        },
        error => {
          console.log('Error lors de connection');
        }
      );
  }

  public LoginMedPro(username,password){
    var headers = new Headers();
    // Website you wish to allow to connect
    headers.append('Content-Type','application/x-www-form-urlencoded');

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', username);
    urlSearchParams.append('pass', password);
    let options = new RequestOptions({ headers: headers, withCredentials: true ,search: urlSearchParams });
     this.http.get("https://medproapp.ddns.net/GEMP/LoginUser",options)
      .map(res => res.json())
      .subscribe(
        data => {
          console.log(data);
          if(data[0]!=null) {
            this.parameters = data["0"];
            LoginPage.loggedInUser = data["0"].cabinetMedicalCollection["0"].email;
            this.username = '';
            this.password = '';
            this.stomp.configure({
              host: 'https://medproapp.ddns.net/GEMP/ws',
              debug: true,
              headers: {
                'Origin ': 'https://medproapp.ddns.net',
                'Content-Type': 'application/json'
              },
              queue: {'init': false, 'user': false}
            });

            //root
            console.log(this.parameters);
            this.saveData(username,password);
            this.navCtrl.setRoot(PatientPage, {'code_Med_Trit': data["0"]});
          }
          else
            this.showAlert('Nom utilisateur/Mot de passe invalide veuillez essayer de nouveau?','alert');
        },
        error => {
          console.log('Error lors de connection et chargement');
        }
      );

  }
  //response
  public response = (data) => {
    console.log('Soket subscribed ');
    this.showAlert("Soket Salle_Attente_deleted", "toast");
  }

//Patient
  callpatient() {
    this.navCtrl.push(PatientPage,{code_Med_Trit:this.parameters["0"]["code_Med_Trit"]});
  }


  public showloading(){
    let loading = this.loadingCtrl.create({
      content: "Connexion Automatique...",
      spinner: 'bubbles'
    });
    loading.present();
    return loading;
  }


  public signOut() {
    LoginPage.auth_status = null;
    this.stomp.disconnect();
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

  ionViewDidLoad() {
    this.getData();
  }
  //
  // ionViewWillEnter() {
  //   this.getData();
  // }

  getData() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS utilisateur(username TEXT PRIMARY KEY, pass TEXT)', {})
        .then(res => console.log('Executed SQL'))
        .catch(e => console.log(e));

      db.executeSql('SELECT * FROM utilisateur ', {})
        .then(res => {
          this.utilisateur = [];
          for(var i=0; i<res.rows.length; i++) {
            this.utilisateur.push({username:res.rows.item(i).username,pass:res.rows.item(i).pass});
          }
          if(this.utilisateur.length >0) {
            var log=this.showloading();
            this.username = this.utilisateur[0].username;
            this.password = this.utilisateur[0].pass;
            this.ConnectSoket(this.utilisateur[0].username, this.utilisateur[0].pass);
            log.dismiss();
          }
        })
        .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }

  deleteData() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('DELETE FROM utilisateur',{})
        .then(res => {
          console.log(res);
        })
        .catch(e => console.log(e));
    }).catch(e => console.log(e));
  }

  saveData(username,password) {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {

      db.executeSql('SELECT COUNT(*) AS totalIncome FROM utilisateur', {})
        .then(res => {
          if(res.rows.length>0) {
            this.totalIncome = parseInt(res.rows.item(0).totalIncome);
            if(this.totalIncome==0){
              db.executeSql('INSERT INTO utilisateur VALUES(?,?)',[username,password])
                .then(res => {
                  console.log(res);
                  this.showAlert(' Connexion automatique activée ' ,'toast');
                })
                .catch(e => {
                  console.log(e);
                  this.showAlert(e ,'alert')
                });
            }
          }
        })
        .catch(e => console.log(e));
    }).catch(e => {
      console.log(e);
      this.showAlert(e ,'alert')
    });
  }
}
