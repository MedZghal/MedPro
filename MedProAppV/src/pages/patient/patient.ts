import {Component} from '@angular/core';
import {LoadingController,ToastController,AlertController,ModalController,MenuController, NavParams,ViewController,Platform,NavController  } from 'ionic-angular';
import { LocalNotifications } from 'ionic-native';
import { ConsultPage } from '../../pages/consult/consult';
import { RdvPage } from '../../pages/rdv/rdv';
import { ChatRoomPage_} from './../chat-room/chat-room_';
import {BackandService} from '@backand/angular2-sdk';
import { StompService } from 'ng2-stomp-service';
import { Http, Headers, RequestOptions,URLSearchParams } from '@angular/http';

@Component({
  templateUrl: 'patient.html',
  selector: 'page-patient'
})
export class PatientPage {
  parameters:any[] = [];
  salleAttente:any[] = [];
	name:string = '';
  description:string = '';
  public patients:any[] = [];
  public patientsPartag:any[] = [];
  public asssur:any[] = [];
  searchQuery: string;
  code_Med_Trit:number;
  param:any = [];
  showSearchCancelButton: boolean = true;
  Recherchebar: string="Recherche... ";
  typeSearch: string="number";

    constructor(public stomp: StompService,public http:Http,public backandService:BackandService,private toastCtrl: ToastController,public menuCtrl: MenuController,public loadingCtrl: LoadingController,private alertCtrl: AlertController,public modalCtrl: ModalController,public navCtrl: NavController,public params: NavParams) {
        this.searchQuery = '';
        this.parameters=this.params.get('code_Med_Trit');
        this.code_Med_Trit=this.params.get('code_Med_Trit').codeMedTrit;
        this.chargeListPatientByMedecin(this.code_Med_Trit);
        this.chargeListeAttente(this.code_Med_Trit);
        this.chargeListPatientPartagByMedecin(this.code_Med_Trit);

      stomp.startConnect().then(() => {
        this.stomp.done('init');
          stomp.after('init').then(()=>{
            stomp.subscribe('/user/queue/notify',this.response);
          });
      });
    }

  //response
  public response = (data) => {
    console.log(data.content);
    if(data.content.includes('deletesalleattende'))
      this.chargeListeAttente(this.code_Med_Trit);
    //this.showAlert("Soket", "toast");
  }

  callChat() {
    this.navCtrl.push(ChatRoomPage_,{patient:null,param:this.parameters});
  }

    callConsult(num_patient) {
      this.navCtrl.push(ConsultPage,num_patient);
    }

  public chargeListeAttente(code_Med_Trit){

    var headers = new Headers();
    // Website you wish to allow to connect
    headers.append('Content-Type','application/x-www-form-urlencoded');
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('codMed', code_Med_Trit);
    let options = new RequestOptions({ headers: headers, withCredentials: true ,search: urlSearchParams });

    this.http.get("https://medproapp.ddns.net/GEMP/SalleAttenteByMedcin",options)
      .map(res => res.json())
      .subscribe(
        data => {
          console.log(data);
          this.salleAttente = data;
          console.log('ok');
        },
        error => {
          console.log('Error lors de connection et chargement');
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


    openModal(item) {
    let modal = this.modalCtrl.create(Profile,{clientObj:item,param:this.parameters});
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


    public chargeListPatientByMedecin(code_Med_Trit){
      var log=this.showloading();
      var headers = new Headers();
      // Website you wish to allow to connect
      headers.append('Content-Type','application/x-www-form-urlencoded');
      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append('codeMedTrit', code_Med_Trit);
      let options = new RequestOptions({ headers: headers, withCredentials: true ,search: urlSearchParams });

      this.http.get("https://medproapp.ddns.net/GEMP/GetPatientByCodMed",options)
        .map(res => res.json())
        .subscribe(
          data => {
            log.dismiss();
            console.log(data);
            this.patients = data;
            if(this.patients.length==0)
              this.showAlert("La liste des patients est vide!!","alert");
          },
          error => {
            console.log('Error lors de connection et chargement');
          }
        );
    }

  public chargeListPatientPartagByMedecin(code_Med_Trit){
    var log=this.showloading();
    var headers = new Headers();
    // Website you wish to allow to connect
    headers.append('Content-Type','application/x-www-form-urlencoded');
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('codeMedTrit', code_Med_Trit);
    let options = new RequestOptions({ headers: headers, withCredentials: true ,search: urlSearchParams });

    this.http.get("https://medproapp.ddns.net/GEMP/GetPatientPartagByCodMed",options)
      .map(res => res.json())
      .subscribe(
        data => {
          log.dismiss();
          console.log(data);
          this.patientsPartag = data;
          if(this.patientsPartag.length==0)
            console.log("La liste des patients Partag est vide!!");
        },
        error => {
          console.log('Error lors de connection et chargement');
        }
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
      this.chargeListPatientByMedecin(this.code_Med_Trit);
      this.chargeListeAttente(this.code_Med_Trit);
      setTimeout(() => {
        console.log('Async operation has ended');
        refresher.complete();
      }, 2000);

    }

    toggleRightMenu() {
     this.menuCtrl.toggle('right');
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
          this.patients = res.data;
        },
        (err: any) => {
          alert(err.data);
        });
  }


  public onCancelSearch() {

  }

  public SerachItems(searchbar) {
    // set q to the value of the searchbar
    var q = searchbar;

    // if the value is an empty string don't filter the items
    if (!q || q.trim() == '') {
      this.chargeListPatientByMedecin(this.code_Med_Trit);
      return;
    }
    else{
      q = q.trim();
    }

    var headers = new Headers();
    // Website you wish to allow to connect
    headers.append('Content-Type','application/x-www-form-urlencoded');
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('num_patient', q);
    let options = new RequestOptions({ headers: headers, withCredentials: true ,search: urlSearchParams });

    this.http.get("https://medproapp.ddns.net/GEMP/Patient",options)
      .map(res => res.json())
      .subscribe(
        data => {
          console.log(data);
          this.asssur = data.assurCnam;
          this.patients = [];
          this.patients.push(data);
          if(this.patients.length==0)
            this.showAlert("La liste des patients est vide!!","alert");
        },
        error => {
          console.log('Error lors de connection et chargement');
        }
      );
  }

}

@Component({
  template: `
    <ion-modal-view>
<ion-header>
  <ion-toolbar style="height: auto;">
    <ion-title>
      <!--<img style=" width: 25px; margin-bottom: -6px; margin-left: -10px; margin-top:1px;" src="./assets/img/onligne.ico">-->
      <ion-avatar item-left style="width: 25px;margin-bottom: -23px;margin-left: -11px;">
        <img  src="{{ImgProfile(patient.datenaiss,patient.sexe)}}">
      </ion-avatar>
      <span style=" margin-left: 17px; ">PATIENT N°{{patient.numFichPatient}}</span>
    </ion-title>
    <span>
      <span  text-uppercase style="color: white;margin-left: 30px;">{{patient.prenom}} {{patient.nom}}
        <ion-badge><small>{{getAge(patient.datenaiss)}}Ans</small></ion-badge>
      </span>
    </span>
    <ion-buttons start style=" margin-top: -50px; ">
      <button ion-button (click)="dismiss()">
        <span color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
      </button>
    </ion-buttons>
    <ion-segment style=" width: 111%;">
      <ion-segment-button style="margin-left: -7px;" (click)="callConsult()" value="Archive">
      <img style=" margin-bottom: -7px;width: 28px;" src="./assets/img/medical-history.png"> <span> Archive </span>
      </ion-segment-button>
      <ion-segment-button value="Rendez-Vous" (click)="callrdv(patient.numFichPatient)" >
        <img style=" margin-bottom: -7px;width: 28px; " src="./assets/img/event.png"><span> Rendez-Vous</span>
      </ion-segment-button>
      <ion-segment-button value="Notes" (click)="callChat(patient)" >
        <img style=" margin-bottom: -7px;width: 28px; " src="./assets/img/chat.png"> <span> Notes</span>
      </ion-segment-button>
    </ion-segment>
  </ion-toolbar>


  
</ion-header>
<ion-content >
  <ion-list>

    <ion-item>
      <ion-badge><span> Motifs de Consultation </span></ion-badge>
      <ion-note>
      <p><img style="width: 50px;float: right;margin-top: -20px;" src="./assets/img/unnamed.png" > </p>

      <p *ngFor="let motif of UpdateConsult.motifConsultCollection">
        <b>{{motif.motif.libelle}}</b>
      </p>
      </ion-note>
  
      <ion-badge style=" margin-top: 10px; "><span> Signes Vitaux </span></ion-badge>
      <ion-note>
        
        <p *ngIf="Examen.temp != '' "><b>Température : </b>{{Examen.temp}}°C Le {{UpdateConsult.dateConsult}}</p>
        <p *ngIf="Examen.pouls != '' "><b>pouls : </b>{{Examen.pouls}} bqM</p>
        <p *ngIf="Examen.ta != '' "><b>T.A : </b>{{Examen.ta}}</p>
        <p *ngIf="Examen.airesGangl != '' "><b>les détails de l'aires Ganglison-naires : </b>{{Examen.airesGangl}}</p>
        <p *ngIf="Examen.auscuCardi != '' "><b>les Détails de l'ausculation Caradiaque : </b>{{Examen.auscuCardi}}</p>
        <p *ngIf="Examen.auscuPleuro != '' "><b>les détails de l'ausculation Pleuro-plumonaire : </b>{{Examen.auscuPleuro}}</p>
        <p *ngIf="Examen.etatGeneral != '' "><b>les détails de l'etat Général : </b>{{Examen.etatGeneral}}</p>
        <p *ngIf="Examen.examenAbdominal != '' "><b>les détails de l'examen Abdominal : </b>{{Examen.examenAbdominal}}</p>
        <p *ngIf="Examen.examPhy != '' "><b>les Détails de l'examen physique : </b>{{Examen.examPhy}}</p>
        <p *ngIf="Examen.examenORL != '' "><b>les Détails de l'examen ORL : </b>{{Examen.examenORL}}</p>
      </ion-note>
    </ion-item>
      <ion-item>
        <ion-badge><span> Détails Patient </span></ion-badge>
        
        <ion-note>
          <p><img style=" width: 50px;    float: right; " src="./assets/img/Medical-invoice-information-icon.png" > </p>
         
          <p> <b>Date de Naissance :</b> {{patient.datenaiss.toString().substring(0,10)}}</p>
          <p><b>Numéro Fixe : </b>{{patient.fixe}}</p>
          <p><b>Numéro Gsm : </b>{{patient.gsm}}</p>
          <p><b>Poids (Kg) : </b>{{patient.poids}} Kg</p>
          <p><b>Situation familiale : </b>{{patient.sutFam}} </p>
          <p><b>Profession : </b>{{patient.profession}} </p>
          <p><b>Adresee : </b>{{patient.adresse}} </p>
        </ion-note>
      </ion-item>
      <ion-item>
        <ion-badge><span> Antécedants </span></ion-badge>
        
          <div style=" margin-top: 5px; ">
            <p><img style=" width: 55px;    float: right; " src="./assets/img/Drug-basket-icon.png" > </p>
            <p *ngFor="let ant of antecedents">
              <img width="15px;" src="{{antecedentImg(ant.typeAntced)}}"/> 
              <b>{{ant.typeAntced}} :</b> {{ant.descripAntced}}</p>
          </div>
        
      </ion-item>
    <ion-item>
       
      <ion-badge>CNAM <small *ngIf="patient.assurCnam != null">N°{{assurCnam.numAssur}}</small></ion-badge>
      <div  *ngIf="patient.assurCnam != null">
        <p><img style=" width: 60px;    float: right; " src="./assets/img/cnam.png" > </p>
        <p><b> Code CNAM : </b>{{assurCnam.codCnam}}</p>
        <p><b> Date de Validation : </b>{{dateValid}}</p>
        <p><b>Ident_unique : </b>{{assurCnam.identUnique}}</p>
        <p><b>Qualite : </b>{{assurCnam.qualite}}</p>
        <p><b>Rang_Assur : </b>{{assurCnam.rangAssur}}</p>
        <p><b>Regime_affi : </b>{{assurCnam.regimeAffi}}</p>
        <p><b>Type : </b>{{assurCnam.type}} </p>
      </div>
    </ion-item>
    <ion-item>
      <ion-badge><span>Traitement APCI</span></ion-badge>
   
        <div  *ngIf="patient.codeApci != ''">
          <p> <b>Code APCI :</b> {{patient.codeApci}}</p>
          <p><b> Date de Validation : </b>{{patient.datenaiss.toString().substring(0,10)}}</p>
          <p><b> Type : </b>{{patient.typeApci}}</p>
          <p><img style=" margin-top: -38px; width: 60px;float: right; " src="./assets/img/stethoscope-icon.png" > </p>
          <span *ngFor="let acte of actes">
            <p><b>Acte Numéro :</b>{{acte.numActe}}</p>
            <p style=" margin-left: 10px; " *ngIf="acte.typ !='CNAM' "><b>Décsription :</b>{{acte.description}}</p>
            <p style=" margin-left: 10px; "><b>libelle :</b>{{acte.libelle}}</p>
          </span>
          
        </div>
    </ion-item>
  </ion-list>



</ion-content>
  </ion-modal-view>
`
})

export class Profile {
  patient:any = [];
  antecedents:any[] = [];
  assurCnam:any[] = [];
  actes:any[] = [];
  consultations:any[] = [];
  UpdateConsult:any = [];
  Examen:any = [];
  parameters:any = [];
  dateValid:string="";


  constructor(public http:Http,private toastCtrl: ToastController,public navCtrl: NavController,private alertCtrl: AlertController,public platform: Platform,public params: NavParams,public viewCtrl: ViewController) {
          this.patient = this.params.get('clientObj');
          console.log(this.patient);
          this.parameters = this.params.get('param');
          console.log(this.parameters);
          this.chargeListeConsultations(this.patient.numFichPatient);
          this.antecedents =this.patient.antecedentsCollection;
          if(this.patient.assurCnam != null) {
            this.dateValid = this.patient.assurCnam.dateValid.toString().substring(0, 10);
            this.assurCnam = this.patient.assurCnam;
          }
          if(this.patient.codeApci =! '')
            this.chargeListeActes(this.patient.numFichPatient);


  }



  callConsult() {
    this.navCtrl.push(ConsultPage,{consults:this.consultations,patient:this.patient.numFichPatient});
  }

  callChat(num_patient) {
    this.navCtrl.push(ChatRoomPage_,{patient:num_patient,param:this.parameters});
  }
  callrdv(num_patient) {
    this.navCtrl.push(RdvPage,{num_patient:num_patient});
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


  public chargeListeActes(num_patient){
    var headers = new Headers();
    // Website you wish to allow to connect
    headers.append('Content-Type','application/x-www-form-urlencoded');
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('num_patient', num_patient);
    let options = new RequestOptions({ headers: headers, withCredentials: true ,search: urlSearchParams });

    this.http.get("https://medproapp.ddns.net/GEMP/ActePatient",options)
      .map(res => res.json())
      .subscribe(
        data => {
          console.log(data);
          this.actes = data;
          if(this.actes.length==0)
            this.showAlert("La liste des Actes est vide!!","alert");
        },
        error => {
          console.log('Error lors de connection et chargement');
        }
      );

  }


  public chargeListeConsultations(num_patient){
    var headers = new Headers();
    // Website you wish to allow to connect
    headers.append('Content-Type','application/x-www-form-urlencoded');
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('num_patient', num_patient);
    let options = new RequestOptions({ headers: headers, withCredentials: true ,search: urlSearchParams });

    this.http.get("https://medproapp.ddns.net/GEMP/ListConsultationsbyPatient",options)
      .map(res => res.json())
      .subscribe(
        data => {
          this.consultations = data;
          if(this.consultations.length!=0)
           this.Examen = data[data.length-1].numExamen;
          console.log(data);
          if(this.consultations.length==0)
            this.showAlert("La liste des consultations est vide!!","alert");
          else
            this.UpdateConsult=this.consultations[this.consultations.length-1];

        },
        error => {
          console.log('Error lors de connection et chargement');
        }
      );

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
