import { Component } from '@angular/core';
import { NavController,NavParams,AlertController,LoadingController ,ViewController,Platform,ModalController } from 'ionic-angular';
import {BackandService} from '@backand/angular2-sdk'
@Component({
  selector: 'page-Consult',
  templateUrl: 'consult.html'
})
export class ConsultPage {
  public consults:any[] = [];
  public  diagnostic:any[] = [];
  public  examen:any[] = [];
  public  ordonnance:any[] = [];
  num_patient:number=0;
  searchQuery: string;
  param:any = [];
  code_Med_Trit:number;

  constructor(public backandService:BackandService,public navCtrl: NavController,public params: NavParams,private alertCtrl: AlertController,public loadingCtrl: LoadingController,public modalCtrl: ModalController) {
    this.searchQuery = '';
    this.num_patient = this.params.get('num_patient');
    this.code_Med_Trit=this.params.get('code_Med_Trit');
    if(this.num_patient!=undefined) {
      this.chargeConsults(this.num_patient);
    }else
       if(this.code_Med_Trit!=undefined) {
         this.chargeConsultsbymedecin(this.code_Med_Trit);
       }

  }


  public chargeConsults(num_patient){
    var log=this.showloading();
    this.param = [{"fieldName":"num_patient","operator":"in","value":num_patient}];
    this.backandService.object.getList('Consultation',{  "filter": [ { "fieldName": "num_patient", "operator": "in", "value": num_patient } ], "deep": true, "relatedObjects": true ,"sort":[ {    "fieldName": "date_consult",    "order": "desc"  }] })
      .then(
        data => {
          console.log(data.data);
          this.diagnostic=data.relatedObjects.Diagnostic;
          this.examen=data.relatedObjects.Examen;
          this.ordonnance=data.relatedObjects.Ordonnance;
          this.consults = data.data;
          log.dismiss();
          console.log('ok');
        },
        err => {console.log(err);this.showAlert("ERREUR , VERIFIER VOTRE CONNEXION !!!");log.dismiss();}
      );

  }

  public chargeConsultsbymedecin(code_Med_Trit){
    var log=this.showloading();
    this.param = [{"fieldName":"code_Med_Trit","operator":"equals","value":code_Med_Trit}];
    this.backandService.object.getList('Consultation',{  "filter": [ { "fieldName": "code_Med_Trit", "operator": "equals", "value": code_Med_Trit } ], "deep": true, "relatedObjects": true,"sort":[ {    "fieldName": "date_consult",    "order": "desc"  }] })
      .then(
        data => {
          console.log(data.data);
          this.diagnostic=data.relatedObjects.Diagnostic;
          this.examen=data.relatedObjects.Examen;
          this.ordonnance=data.relatedObjects.Ordonnance;
          this.consults = data.data;
          log.dismiss();
          console.log('ok');
        },
        err => {console.log(err);this.showAlert("ERREUR , VERIFIER VOTRE CONNEXION !!!");log.dismiss();}
      );

  }

  openModal(consultObj) {
    let modal = this.modalCtrl.create(DetailsConsult, consultObj);
    modal.present();
  }

  public  showAlert(msg) {
      let alert = this.alertCtrl.create({
        title: 'Notification !!',
        subTitle: msg,
        buttons: ['OK']
      });
      alert.present();

  }

  public getItems(refresher) {
    if(this.num_patient!=undefined)
      this.chargeConsults(this.num_patient);
    else
      this.chargeConsultsbymedecin(this.code_Med_Trit);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);

  }

  public showloading(){
    let loading = this.loadingCtrl.create({
      content: "S'il vous plaît, attendez...",
      spinner: 'bubbles'
    });
    loading.present();
    return loading;
  }

  public filterItems() {
    // set q to the value of the searchbar
    var q = this.searchQuery;

    // if the value is an empty string don't filter the items
    if (!q || q.trim() == '') {
      if(this.num_patient!=undefined)
        this.chargeConsults(this.num_patient);
      else
        this.chargeConsultsbymedecin(this.code_Med_Trit);
      return;
    }
    else{
      q = q.trim();
    }


    let params = {
      filter: [
        this.backandService.helpers.filter.create('num_consult', this.backandService.helpers.filter.operators.text.equals, q),
      ],
    }

    this.backandService.object.getList('Consultation', params)
      .then((res: any) => {
          this.consults = res.data;
        },
        (err: any) => {
          alert(err.data);
        });
  }

}

@Component({
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <img style=" width: 25px; margin-bottom: -6px; margin-left: -10px; " src="./assets/img/unnamed.png"> Consultation N°{{conssult.num_consult}}
        </ion-title>
        <ion-buttons start>
          <button ion-button (click)="dismiss()">
            <span color="primary" showWhen="ios">Cancel</span>
            <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
          </button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        
        <ion-item>
          Détails <br/>Examen Clinique
          <ion-note item-right>
          <div class="feat_small_details">
            <h4 *ngIf="conssult.num_examen!=''" style=" width: 120%; margin-left: -120px;">{{conssult.type_consult}} le {{conssult.date_consult.toString().substring(0,10)}}</h4>
            <h4 *ngIf="conssult.num_examen==''" style=" width: 120%; ">{{conssult.type_consult}} le {{conssult.date_consult.toString().substring(0,10)}}</h4>
            <a  data-transition="slidefade" *ngIf="conssult.num_examen!=''">
              <span text-uppercase style="color:cornflowerblue;">Examen N°{{conssult.num_examen}}</span>
              <div style="margin-left: 20px;">
                <p class="rowp"><span>Pouls :{{examen[conssult.num_examen].pouls}}</span>  <span>Temp :{{examen[conssult.num_examen].temp}}</span>  <span>TA :{{examen[conssult.num_examen].TA}}</span></p>
                <p class="rowp"><span>Aires_gangl :{{examen[conssult.num_examen].aires_gangl}}</span> </p>
                <p class="rowp"><span>Auscu_cardi :{{examen[conssult.num_examen].auscu_cardi}}</span> </p>
                <p class="rowp"><span>Auscu_pleuro :{{examen[conssult.num_examen].auscu_pleuro}}</span></p>
                <p class="rowp"><span>Etat_general :{{examen[conssult.num_examen].etat_general}}</span>  </p>
                <p class="rowp"><span>Exam_phy :{{examen[conssult.num_examen].exam_phy}}</span>  </p>
                <p class="rowp"><span>Examen_abdominal :{{examen[conssult.num_examen].examen_abdominal}}</span>  </p>
                <p class="rowp"><span>Examen_ORL :{{examen[conssult.num_examen].examen_ORL}}</span>  </p>
              </div>
            </a>
          </div>
          </ion-note>
        </ion-item>

        <ion-item>
          Détails <br/> Diagnostic
          <ion-note item-right>
            <p> Libélle : {{diagnostic[conssult.Diag_consult].libelle}}</p>
          </ion-note>
        </ion-item>
        <ion-item>
          Détails <br/> Ordonnance
          <ion-note item-right *ngIf="conssult.num_Ord!=''">
            <p> Numéro : {{ordonnance[conssult.num_Ord].num_ord}}</p>
            <p> Date : {{ordonnance[conssult.num_Ord].date}}</p>
          </ion-note>
        </ion-item>
      </ion-list>
    </ion-content>
  `
})

export class DetailsConsult {
  conssult:any[] = [];
  examen:any[] = [];
  diagnostic:any[] = [];
  ordonnance:any[] = [];
  dateValid:string="";
  constructor(private alertCtrl: AlertController,public platform: Platform,public params: NavParams,public viewCtrl: ViewController) {
    this.conssult = this.params.get('consultObj');
    this.diagnostic = this.params.get('diag');
    this.ordonnance = this.params.get('ord');
    this.examen = this.params.get('exm');
    console.log(this.diagnostic);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  showAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Notification !!',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

}
