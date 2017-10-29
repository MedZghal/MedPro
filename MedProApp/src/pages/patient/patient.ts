import {Component} from '@angular/core';
import {LoadingController,AlertController,ModalController, NavParams,ViewController,Platform,NavController  } from 'ionic-angular';
import { LocalNotifications } from 'ionic-native';
import { ConsultPage } from '../../pages/consult/consult';
import {BackandService} from '@backand/angular2-sdk';


@Component({
  templateUrl: 'patient.html',
  selector: 'page-patient'
})
export class PatientPage {
	name:string = '';
  description:string = '';
  public items:any[] = [];
  searchQuery: string;
  code_Med_Trit:number;
  param:any = [];

    constructor(public backandService:BackandService,public loadingCtrl: LoadingController,private alertCtrl: AlertController,public modalCtrl: ModalController,public navCtrl: NavController,public params: NavParams) {
        this.searchQuery = '';
        this.code_Med_Trit = this.params.get('code_Med_Trit');
        this.load(this.code_Med_Trit);




    }

  callConsult(num_patient) {
    this.navCtrl.push(ConsultPage,num_patient);
  }

    showAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Notification !!',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

    openModal(clientObj) {
    let modal = this.modalCtrl.create(Profile, clientObj);
    modal.present();
  }



    public PushNotification(txt){
     var sound = 'file://beep.mp3';
     LocalNotifications.schedule({
       id: 1,
       title: 'Notification !!',
       text: txt,
       sound:sound,
       icon:'<ion-icon ios="ios-notifications-outline" md="md-notifications-outline"></ion-icon>'
     });
   }

    public delete(item){

    let alert = this.alertCtrl.create({
      title:'Confirmation',
      message: 'Are you sure you want to delete the selected rows?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.showloading();
            console.log('Buy clicked');
            this.backandService.object.delete('Client',item.Idclient)
              .subscribe(
                data => {
                  console.log(data);
                },
                err => {this.showAlert("Delete Failed !!")},
                () => {this.load(this.code_Med_Trit);this.showAlert("Delete with Success!!");}
              );
          }
        }
      ]
    });
    alert.present();

    }

    public load(code_Med_Trit){
      var log=this.showloading();

      this.backandService.object.getList('Patient',{  "filter": [ { "fieldName": "fichpapier", "operator": "contains", "value": "M"+code_Med_Trit } ], "deep": true, "relatedObjects": false })
        .then(
          data => {
            log.dismiss();
            this.items = data.data;
            if(this.items.length==0)
              this.showAlert("La liste des patients est vide!!");

            console.log(data.data);

          },
          err => {this.showAlert("ERREUR LORS DU CHARGEMENT DE LA BASE DE DONNEES, VERIFIER VOTRE CONNEXION");log.dismiss();}
        );

    }

    public showloading(){
      let loading = this.loadingCtrl.create({
        content: "S'il vous plaît, attendez...",
        spinner: 'bubbles'
      });
      loading.present();
      return loading;
    }

    public getItems(refresher) {
       this.load(this.code_Med_Trit);
      setTimeout(() => {
        console.log('Async operation has ended');
        refresher.complete();
      }, 2000);

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

    public AutreAssurImg(Assur){
    var AutreAurr;
    if(Assur === "STEG")
      AutreAurr ="./assets/img/steg_.png";
    else
    if(Assur === "COMAR")
      AutreAurr ="./assets/img/ag42-logo_assurance_comar.png";
    else
    if(Assur === "MAGHREBIA")
      AutreAurr ="./assets/img/MAGHREBIA.png";
    else
      AutreAurr ="./assets/img/amen.png";

    return AutreAurr;
  }

  public filterItems() {
    // set q to the value of the searchbar
    var q = this.searchQuery;

    // if the value is an empty string don't filter the items
    if (!q || q.trim() == '') {
      return;
    }
    else{
      q = q.trim();
    }


    let params = {
      filter: [
        this.backandService.helpers.filter.create('fichpapier', this.backandService.helpers.filter.operators.text.contains, q),
      ],
    }

    this.backandService.object.getList('Patient', params)
      .then((res: any) => {
          this.items = res.data;
        },
        (err: any) => {
          alert(err.data);
        });
  }


  public SerachItems(searchbar) {
    // set q to the value of the searchbar
    var q = searchbar;

    // if the value is an empty string don't filter the items
    if (!q || q.trim() == '') {
      this.load(this.code_Med_Trit);
      return;
    }
    else{
      q = q.trim();
    }

    let params = {
      filter: [
        this.backandService.helpers.filter.create('fichpapier', this.backandService.helpers.filter.operators.text.contains, q),
      ],
    }

    this.backandService.object.getList('Patient',params)
      .then(
        data => {
          console.log("subscribe", data.data);
          this.items = data.data;
          console.log('OK');
        },
        err => console.log(err)
      );
  }

}

@Component({
  template: `
    <ion-modal-view>
<ion-header>
  <ion-toolbar style="height: 70px;">
    <ion-title>
      <img style=" width: 25px; margin-bottom: -6px; margin-left: -10px; " src="./assets/img/onligne.ico"> PATIENT N°{{client.num_fich_patient}}
    </ion-title>
    <ion-buttons start style=" margin-top: -50px; ">
      <button ion-button (click)="dismiss()">
        <span color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
      </button>
    </ion-buttons>
    <ion-segment style=" width: 110%;">
      <ion-segment-button (click)="callConsult(client.num_fich_patient)" value="Archive">
        Archive
      </ion-segment-button>
      <ion-segment-button value="Rendez-Vous">
        Rendez-Vous
      </ion-segment-button>
      <ion-segment-button value="Notes">
        Notes
      </ion-segment-button>
    </ion-segment>
  </ion-toolbar>


  
</ion-header>
<ion-content >
  <ion-list>
      <ion-item>
        <ion-avatar item-left>
          <img src="{{ImgProfile(client.datenaiss,client.sexe)}}">
        </ion-avatar>
        <h2 text-uppercase>{{client.prenom}} {{client.nom}} <ion-badge><small>{{getAge(client.datenaiss)}}Ans</small></ion-badge></h2>
        <p >
          <span><img style="width: 15px;" src="./assets/img/map.png"><span>  {{client.adresse}}</span>  </span>
          <span *ngIf="client.AssurCnam!=''"><img style="width: 20px;height: 20px;margin-bottom: -2px;" src="./assets/img/cnam.png"></span>
          <span *ngIf="client.code_apci!=''"><img style="width: 19px; height: 14px; margin-top: -16px; " src="./assets/img/apci_logo_600w.png"></span>
          <span *ngIf="client.AutreAssur!=''"><img style="width: 23px; height: 15px; margin-top: -17px; " src="{{AutreAssurImg(client.AutreAssur)}}"></span>
        </p>
      </ion-item>

      <ion-item>
        Détails Patient 
        <ion-note item-right>
         <p> Date de Naissance : {{client.datenaiss.toString().substring(0,10)}}</p>
          <p>Numéro Fixe : {{client.fixe}}</p>
          <p>Numéro Gsm : {{client.gsm}}</p>
          <p>Poids (Kg) : {{client.poids}} Kg</p>
          <p>Situation familiale : {{client.sut_fam}} </p>
          <p>Profession : {{client.profession}} </p>
        </ion-note>
      </ion-item>
      <ion-item>
        Antécedants
        <ion-note item-right>
          <div style="margin-left: -212px;">
            <p *ngFor="let ant of antecedents"><img width="15px;" src="{{antecedentImg(ant.typeAntced)}}"/> {{ant.typeAntced}} : {{ant.descrip_Antced}}</p>
          </div>
        </ion-note>
      </ion-item>
    <ion-item>
       <span style="margin-left: 15px;">CNAM</span><br/> <ion-badge style="margin-left: 5px;"><small *ngIf="client.AssurCnam!=''">N°{{assurCnam.num_Assur}}</small></ion-badge>
      <ion-note item-right *ngIf="client.AssurCnam!=''">
        <p> Date de Validation : {{dateValid}}</p>
        <p>Ident_unique : {{assurCnam.ident_unique}}</p>
        <p>Qualite : {{assurCnam.qualite}}</p>
        <p>Rang_Assur : {{assurCnam.rang_Assur}}</p>
        <p>Regime_affi : {{assurCnam.regime_affi}}</p>
        <p>Type : {{assurCnam.type}} </p>
      </ion-note>
    </ion-item>
    <ion-item>
      Traitement <br/> <span style="margin-left: 18px;">APCI</span>
      <ion-note item-right>
        <ion-note item-right *ngIf="client.code_apci!=''">
          <p> Code APCI : {{client.code_apci}}</p>
          <p> Date de Validation : {{client.datenaiss.toString().substring(0,10)}}</p>
          <p> Type : {{client.type_apci}}</p>
        </ion-note>
      </ion-note>
    </ion-item>
  </ion-list>



</ion-content>
  </ion-modal-view>
`
})

export class Profile {
  client:any[] = [];
  antecedents:any[] = [];
  assurCnam:any[] = [];
  traiApci:any[] = [];
  parameters:any = [];
  dateValid:string="";


  constructor(public backandService:BackandService,public navCtrl: NavController,private alertCtrl: AlertController,public platform: Platform,public params: NavParams,public viewCtrl: ViewController) {
          this.client = this.params.get('clientObj');
          this.chargeAntecedents(this.client["num_fich_patient"]);
          if(this.client["AssurCnam"] !="")
            this.chargeAssur(this.client["AssurCnam"]);
  }

  callConsult(num_patient) {
    console.log(num_patient);
    this.navCtrl.push(ConsultPage,{num_patient:num_patient});
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  public chargeAntecedents(num_patient){

    this.backandService.object.getList('Antecedents',{  "filter": [ { "fieldName": "patient", "operator": "in", "value": num_patient } ], "deep": false, "relatedObjects": false })
      .then(
        data => {
          console.log(data.data);
          this.antecedents = data.data;
          console.log('OK');
        },
        err => {console.log(err);this.showAlert("ERREUR , VERIFIER VOTRE CONNEXION !!!")}
      );

  }

  public chargeAssur(num_Assur){
    this.backandService.object.getOne('AssuranceCNAM',num_Assur)
      .then(
        data => {
          console.log(data.data);
          this.dateValid=data.data["date_valid"].toString().substring(0,10);
          this.assurCnam = data.data;
          console.log('OK');
        },
        err => {console.log(err);this.showAlert("ERREUR , VERIFIER VOTRE CONNEXION !!!")}
      );

  }

  public chargeTraiApci(num_patient){

    this.backandService.object.getList('Antecedents',{  "filter": [ { "fieldName": "patient", "operator": "in", "value": num_patient } ], "deep": false, "relatedObjects": false })
      .then(
        data => {
          console.log(data.data);
          this.antecedents = data.data;
          console.log('OK');
        },
        err => {console.log(err);this.showAlert("ERREUR , VERIFIER VOTRE CONNEXION !!!")}
      );

  }

  showAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Notification !!',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
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

  public AutreAssurImg(Assur){
    var AutreAurr;
    if(Assur === "STEG")
      AutreAurr ="./assets/img/steg_.png";
    else
    if(Assur === "COMAR")
      AutreAurr ="./assets/img/ag42-logo_assurance_comar.png";
    else
    if(Assur === "MAGHREBIA")
      AutreAurr ="./assets/img/MAGHREBIA.png";
    else
      AutreAurr ="./assets/img/amen.png";

    return AutreAurr;
  }

  public antecedentImg(ant){
    var antImg;
    if(ant === "Médicaux")
      antImg ="./assets/img/pill_s.png";
    else
    if(ant === "Chirurgicaux")
      antImg ="./assets/img/cherig.png";
    else
    if(ant === "Familiaux")
      antImg ="./assets/img/family.png";
    else
      antImg ="./assets/img/test-tube.png";

    return antImg;
  }
}
