import {Component} from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams, AlertController, LoadingController,Events} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {BackendProvider} from "../../providers/backend/backend";
import {HomePage} from "../home/home";
import {StompService} from 'ng2-stomp-service';

/**
 * Generated class for the LoginbackendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-loginbackend',
  templateUrl: 'loginbackend.html',
})
export class LoginbackendPage {
  private UsrPass : FormGroup;
  username:string = '';
  password:string = '';
  loading :any = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    private formBuilder: FormBuilder,
    public service :BackendProvider,
    public alertCtrl:AlertController,
    public loadingCtrl: LoadingController,
    public events: Events,
    private stomp: StompService) {

      this.menu.swipeEnable(false);
      this.UsrPass = this.formBuilder.group({
        USER: ['', Validators.required],
        PASS: ['', Validators.required]
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginbackendPage');

  }

  navigatePush(){
    //this.navCtrl.push('PatientPage');
  }

  forgotPass(){

  }

  LinkUrl(){

  }

  loginUser(user,pass){
    console.log(user,pass);
    let params = {
      'username':user,
      'pass':pass
    };
    let log = this.presentLoadingDefault();
    this.service.get('LoginUser',params)
      // .retryWhen( errors => errors.pipe(
      //   tap(val => {
      //     log.dismiss();
      //     this.doPrompt("Serveur shutdown !!!! ");
      //   }),
      //   delayWhen(()=> Observable.timer(3000))))
      .subscribe(
      data => {
            if(data[0] != null){
              log.dismiss();
              console.log(data[0]);
              this.stomp.configure({
                host: 'https://medproapp.ddns.net/Clinique/ws',
                debug: true,
                headers: {
                  'Origin ': 'https://medproapp.ddns.net/Clinique',
                  'Content-Type': 'application/json'
                },
                queue: {'init': true, 'user': false}
              });

              this.navCtrl.setRoot(HomePage,{'parametres':data[0]} );
              this.events.publish('parametres:created',data[0], Date.now());
            }
            else{
              log.dismiss();
              this.doPrompt("nom d'utilisateur ou mot de passe incorrect");
            }

      },
      error =>{

      }

    );

    // this.navCtrl.setRoot(TabsPage);
  }

  doPrompt(msg) {
    let alert = this.alertCtrl.create({
      title:"Message d'erreur",
      subTitle: msg,
      buttons: ['Quitter']
    });
    alert.present();
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: "S'il vous plaît, attendez...",
      spinner: 'bubbles'
    });

    loading.present();
    return loading;
  }

  public showloading(){
    let loading = this.loadingCtrl.create({
      content: "Connexion Automatique...",
      spinner: 'bubbles'
    });
    loading.present();
    return loading;
  }

}
