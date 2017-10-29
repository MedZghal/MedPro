import { Component } from '@angular/core';
import {NavController,AlertController,ToastController,LoadingController,MenuController,ModalController} from 'ionic-angular';
import { LocalNotifications} from '@ionic-native/local-notifications';
import { PatientPage,Profile } from '../patient/patient';
import { LoginPage } from '../login/login';
import { RdvPage } from '../rdv/rdv';
import { ConsultPage } from '../consult/consult';
import { AboutPage } from '../about/about';
import { ParametrePage } from '../parametre/parametre';
import { StatistiquePage } from '../Statistique/statistique';
import { BackandService} from '@backand/angular2-sdk';
@Component({
  templateUrl: 'home.html',
  selector:'page-home'
})
export class HomePage {
  parameters:any[] = [];
  salleAttente:any[] = [];
  patientlisteAttente:any[]=[];
  rdvs:any[]=[];
  param:any = [];
  public items:any[] = [];

  constructor(private localNotifications: LocalNotifications,public menuCtrl: MenuController,private toastCtrl: ToastController,public backandService:BackandService,public navCtrl: NavController,private alertCtrl: AlertController,public loadingCtrl: LoadingController,public modalCtrl: ModalController){
    this.chargeParametre(LoginPage.loggedInUser.toString());
    let that = this;

    this.backandService.on("EventTrigger_updated", function (data) {
      console.log((data[1].Value).toString().includes('Salle_Attente_ADD'));
      console.log((data[1].Value).toString().includes((that.parameters["0"]["code_Med_Trit"]).toString()));
      that.chargeListeAttente(that.parameters["0"]["code_Med_Trit"]);
          if ((data[1].Value).toString().includes('Salle_Attente_ADD') && (data[1].Value).toString().includes((that.parameters["0"]["code_Med_Trit"]).toString()))
          {
            that.PushNotification('Un nouveau patient est arrivé!!');
            that.showAlert("Salle_Attente_updated", "toast");
          } else
            if((data[1].Value).toString().includes((that.parameters["0"]["code_Med_Trit"]).toString()))
              that.showAlert("Salle_Attente_deleted", "toast");
      }
    );

  }

  openModal(clientObj) {
    let modal = this.modalCtrl.create(Profile,clientObj);
    modal.present();
  }

  callpatient() {
    this.navCtrl.push(PatientPage,{code_Med_Trit:this.parameters["0"]["code_Med_Trit"]});
  }

  public PushNotification(txt){
    var sound = 'file://assets/sound/beep.mp3';
    this.localNotifications.schedule({
      id: 1,
      title: 'MedPro Notification !!',
      text: txt,
      sound: sound,
      icon: 'res://notificationicon.png'
    });
  }

  callrdv() {
    this.navCtrl.push(RdvPage,{code_Med_Trit:this.parameters["0"]["code_Med_Trit"]});
  }

  callparametre() {
    this.navCtrl.push(ParametrePage,{parametre:this.parameters["0"]});
  }

  callConsult(){
    this.navCtrl.push(ConsultPage,{code_Med_Trit:this.parameters["0"]["code_Med_Trit"]});
  }

  callStatistique() {
    this.navCtrl.push(StatistiquePage);
  }

  callAbout(){
    this.navCtrl.push(AboutPage);
  }

  toggleRightMenu() {
    this.menuCtrl.toggle('right');
  }

  public chargeParametre(email){
    var log =this.showloading();

    this.backandService.object.getList('Cabinet_Medical',{  "filter": [ { "fieldName": "email", "operator": "contains", "value": email } ], "deep": true, "relatedObjects": false })
      .then(
        data => {
          console.log(data.data[0]);
          this.parameters = data.data;
          this.showAlert("Bienvenue Dr." + this.parameters["0"]["nom_medecin"] + " " + this.parameters["0"]["prenom_medecin"], "toast"),
            this.chargeListeAttente(this.parameters["0"]["code_Med_Trit"]);
          log.dismiss();
        },
        err => {console.log(err);this.showAlert("ERREUR , VERIFIER VOTRE CONNEXION !!!","alert");log.dismiss();}
      );

  }

  public chargeListeAttente(code_Med_Trit){
    this.param = [{"fieldName":"num_medc_trait","operator":"equals","value":code_Med_Trit}];
    this.backandService.object.getList('Salle_Attente',{  "filter": [ { "fieldName": "num_medc_trait", "operator": "equals", "value": code_Med_Trit } ], "deep": true, "relatedObjects": true })
      .then(
        data => {
          // console.log(data.data);
          this.salleAttente = data.data;
          this.rdvs=data.relatedObjects.RDV;
          this.patientlisteAttente=data.relatedObjects.Patient;
          console.log('ok');
        },
        err => {console.log(err);this.showAlert("ERREUR , VERIFIER VOTRE CONNEXION !!!","alert")}
      );

  }

  public getItems(refresher) {
    this.chargeParametre(LoginPage.loggedInUser.toString());
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);

  }

  public showloading(){
    let loading = this.loadingCtrl.create({
      content: "S'il vous plaît, attendez...",
      spinner: 'bubbles'
    });
    loading.present();
    return loading;
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

  public getAge(date){
    var d = new Date();
    var d1 = date.toString().substring(0,4);
    var age =d.getFullYear()- parseInt(d1);
    if(age==0)
      age=1;
    return  age;
  }

  public ImgProfile(datenaiss,sexe){

    var age =this.getAge(datenaiss);
    if (sexe === "Femme" )
    {

      if(age < 12)
        return './assets/img/avatars/icon_girl-512.png';
      else
      if(age>=12 && age<=20)
        return './assets/img/avatars/girl.png';
      else
      if(age>20 && age<=50)
        return './assets/img/avatars/034-user-6.png';
      else
        return './assets/img/avatars/019-social-1.png';
    }
    else
    {
      if(age < 12)
        return './assets/img/avatars/icon_boy-512.png';
      else
      if(age>=12 && age<=20)
        return './assets/img/avatars/boy.png';
      else
      if(age>20 && age<=50)
        return './assets/img/avatars/043-man-1.png';
      else
        return './assets/img/avatars/042-man-2.png';
    }
  }
}
