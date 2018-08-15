import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform, ViewController,AlertController,ToastController} from 'ionic-angular';
import {BackendProvider} from "../../providers/backend/backend";
import {PiecePage} from "../piece/piece";

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface Config {
  technologies: string;
}

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  // patient info
  public antecedentsM: any =[];
  public antecedentsCH: any=[];
  public antecedentsF: any=[];
  public antecedentsA: any=[];
  dateValid:string="";
  assurCnam:any[] = [];
  actes:any[] = [];
  patient :any ;
  consultations:any[] = [];
  Examen:any = [];
  UpdateConsult:any = [];
  openUl :boolean = false;
  params :any = [];

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public paramsNav: NavParams,
    public viewCtrl: ViewController,
    public service :BackendProvider,
    public alertCtrl : AlertController,
    public toastCtrl : ToastController) {
      // set sample data
      this.patient =this.paramsNav.get('Patient');
      this.chargeListeConsultations(this.patient.patient.numFichPatient);

      for( let z of this.patient.patient.antecedentsCollection){
          if(z.typeAntced == 'Chirurgicaux')
            this.antecedentsCH.push(z);
          else
          if(z.typeAntced == 'Médicaux')
            this.antecedentsM.push(z);
          else
          if(z.typeAntced == 'Familiaux')
            this.antecedentsF.push(z);
          else
            this.antecedentsA.push(z);
      }

      if(this.patient.assurCnam != null) {
        this.dateValid = this.patient.patient.assurCnam.dateValid.toString().substring(0, 10);
        this.assurCnam = this.patient.patient.assurCnam;
      }


    this.params.data = {
      "header": "Listes des Antécedents",
      "items": []
    };

      if(this.patient.codeApci =! '')
        this.chargeListeActes(this.patient.patient.numFichPatient);


        this.params.events = {
      'onItemClick': function(item: any) {
        console.log('onItemClick');
      },
      'onRates': function(index: number) {
        console.log('onRates');
      },
      'onCheckBoxClick': function(item: any) {
        console.log('onCheckBoxClick');
      },
      'onButtonClick' : function(item: any) {
        console.log('onButtonClick');
      }
    };
  }

  ionViewDidLoad() {

  }



  // go to reviews page
  viewReviews() {
   // this.nav.push(ReviewsPage);
  }

  // go to checkout page
  checkout() {
    //this.nav.push(CheckoutHotelPage);
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

  public getAge(date){
    var d = new Date();
    var d1 = new Date(date);
    var age =d.getFullYear()- d1.getFullYear();
    if(age==0)
      age=1;
    return  age;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  callConsult(patient){
    console.log('callConsult');
  }

  callrdv(patient){
    console.log(patient);
  }

  callChat(patient){
    console.log(patient);
  }

  callPiece(patient){
    this.navCtrl.push(PiecePage,{Patient:patient});
  }

  public antecedentImg(ant){
    var antImg;
    if(ant === "Médicaux")
      antImg ="medproicons-stethoscope";
    else
    if(ant === "Chirurgicaux")
      antImg ="medproicons-transfusion";
    else
    if(ant === "Familiaux")
      antImg ="medproicons-syringe2";
    else
      antImg ="medproicons-syringe";

    return antImg;
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

  public chargeListeConsultations(num_patient){
    let param ={
      'num_patient':num_patient
    };
    this.service.get('ListConsultationsbyPatient',param).subscribe(
      (data : any)  =>{
        this.consultations = data;
        if(this.consultations.length!=0)
          this.Examen = data[data.length-1].numExamen;
        if(this.consultations.length!=0)
          this.UpdateConsult=this.consultations[this.consultations.length-1];
        else
          this.showAlert("La liste des consultations est vide!!","toast");


      },
      error =>{

      }
    )

  }

  public chargeListeActes(num_patient){
    let param ={
      'num_patient':num_patient
    };
    this.service.get('ListActesbyPatient',param).subscribe(
      (data :any)=>{

        for(let acte of data ){
          this.params.data.items.push(
            {
              "description1" : "libelle :"+acte.libelle,
              // "description2" : acte.tiketModer,
              // "description3" : acte.montant,
              // "description4" : acte.cotation,
              "expandItems" : [ {
                "description" : "tiketModer de l'acte",
                "details" : acte.tiketModer,
                "id" : 1,
                "image" : "assets/images/avatar/10.jpg",
                "title" : "Ticket modérateur"
              },
                {
                  "description" : "Montant en dinar ",
                  "details" : acte.montant+ "DT",
                  "id" : 2,
                  "image" : "assets/images/avatar/11.jpg",
                  "title" : "Montant "
                },
                {
                  "description" : "cotation de l'acte",
                  "details" : acte.cotation,
                  "id" : 3,
                  "image" : "assets/images/avatar/12.jpg",
                  "title" : "Cotation"
                },
                {
                  "description" : acte.description,
                  "details" :"",
                  "id" : 4,
                  "image" : "assets/images/avatar/13.jpg",
                  "title" : "Description"
                } ],
              "id" : acte.numActe,
              "image" : "assets/images/avatar/15.jpg",
              "title" : "Acte Numéro :"+ acte.numActe
            }
          );
        }



        if(this.actes.length==0)
          this.showAlert("La liste des Actes est vide!!","toast");
      },
      error => {

      }
    )
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
        cssClass: "changeToast"
      });
      toast.present();
    }
  }

  to_DatesTRING(date){
    return (new Date(date)).toLocaleDateString();
  }
}
