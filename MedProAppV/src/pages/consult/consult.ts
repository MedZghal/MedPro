import { Component } from '@angular/core';
import { NavController,NavParams,AlertController,LoadingController ,ViewController,Platform,ModalController } from 'ionic-angular';
import { Http, Headers, RequestOptions,URLSearchParams } from '@angular/http';
@Component({
  selector: 'page-Consult',
  templateUrl: 'consult.html'
})
export class ConsultPage {
  public consults:any = [];
  num_patient:number=0;
  searchQuery: string;
  param:any = [];
  code_Med_Trit:number;
  typeSearch: string="number";
  showSearchCancelButton: boolean = true;
  Recherchebar: string="Recherche... ";

  constructor(public http:Http,public navCtrl: NavController,public params: NavParams,private alertCtrl: AlertController,public loadingCtrl: LoadingController,public modalCtrl: ModalController) {
    this.searchQuery = '';
    this.consults = this.params.get('consults');
    this.num_patient=this.params.get('patient');

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
          this.consults = data;
          if(this.consults.length==0)
            this.showAlert("La liste des Consultations est vide!!");
        },
        error => {
          console.log('Error lors de connection et chargement');
        }
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
      this.chargeListeConsultations(this.num_patient);
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

  public onCancelSearch() {

  }

  public filterItems() {
    // set q to the value of the searchbar
    var q = this.searchQuery;

    // if the value is an empty string don't filter the items
    if (!q || q.trim() == '') {
        this.chargeListeConsultations(this.num_patient);
      return;
    }
    else{
      q = q.trim();
    }


    var headers = new Headers();
    // Website you wish to allow to connect
    headers.append('Content-Type','application/x-www-form-urlencoded');
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('num_consult', q);
    let options = new RequestOptions({ headers: headers, withCredentials: true ,search: urlSearchParams });

    this.http.get("https://medproapp.ddns.net/GEMP/Consultation",options)
      .map(res => res.json())
      .subscribe(
        data => {
          console.log(data);
          this.consults=[];
          this.consults.push(data);
        },
        error => {
          console.log('Error lors de connection et chargement');
        }
      );
  }

}

@Component({
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <img style=" width: 25px; margin-bottom: -6px; margin-left: -10px; " src="./assets/img/unnamed.png"> Consultation N°{{conssult.numConsult}}
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
            <h4 *ngIf="conssult.numExamen != null" style=" width: 120%; margin-left: -120px;">{{conssult.typeConsult}} le {{conssult.dateConsult.toString().substring(0,10)}}</h4>
            <h4 *ngIf="conssult.numExamen == null" style=" width: 120%; ">{{conssult.typeConsult}} le {{conssult.dateConsult.toString().substring(0,10)}}</h4>
            <a  data-transition="slidefade" *ngIf="conssult.numExamen!=''">
              <span text-uppercase style="color:cornflowerblue;">Examen N°{{conssult.numExamen.numExamen}}</span>
              <div style="margin-left: 20px;">
                <p class="rowp"><span>Pouls :{{conssult.numExamen.pouls}}</span>  <span>Temp :{{conssult.numExamen.temp}}</span>  <span>TA :{{conssult.numExamen.ta}}</span></p>
                <p class="rowp"><span>Aires_gangl :{{conssult.numExamen.airesGangl}}</span> </p>
                <p class="rowp"><span>Auscu_cardi :{{conssult.numExamen.auscuCardi}}</span> </p>
                <p class="rowp"><span>Auscu_pleuro :{{conssult.numExamen.auscuPleuro}}</span></p>
                <p class="rowp"><span>Etat_general :{{conssult.numExamen.etatGeneral}}</span>  </p>
                <p class="rowp"><span>Exam_phy :{{conssult.numExamen.examPhy}}</span>  </p>
                <p class="rowp"><span>Examen_abdominal :{{conssult.numExamen.examenAbdominal}}</span>  </p>
                <p class="rowp"><span>Examen_ORL :{{conssult.numExamen.examen_ORL}}</span>  </p>
              </div>
            </a>
          </div>
          </ion-note>
        </ion-item>

        <ion-item>
          Détails <br/> Diagnostic
          <ion-note item-right>
            <p> Libélle : {{conssult.diagconsult.libelle}}</p>
          </ion-note>
        </ion-item>
        <ion-item>
          Détails <br/> Ordonnance
          <ion-note item-right *ngIf="conssult.numOrd!=null">
            <p> Numéro : {{conssult.numOrd.numOrd}}</p>
            <p> Date : {{conssult.numOrd.date}}</p>
          </ion-note>
        </ion-item>
      </ion-list>
    </ion-content>
  `
})

export class DetailsConsult {
  conssult:any[] = [];
  constructor(private alertCtrl: AlertController,public platform: Platform,public params: NavParams,public viewCtrl: ViewController) {
    this.conssult = this.params.get('consultObj');
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
