import {Component} from "@angular/core";
import {NavController,AlertController,NavParams,ModalController,LoadingController,ViewController,Platform} from 'ionic-angular';
import {Calendar} from '@ionic-native/calendar';
import {BackandService} from '@backand/angular2-sdk';

@Component({
  templateUrl: 'rdv.html',
  selector: 'page-rdv'
})
export class RdvPage {
  public rdvs:any[] = [];
  param:any = [];
  searchQuery: string;
  code_Med_Trit:number;
  num_patient:number;
  showSearchCancelButton: boolean = true;
  Recherchebar: string="Recherche... ";

  public Event: Array<{id : number,title: string,note: string,startDate: Date,endDate: Date,titleUpdated: string,noteUpdated: string}>;

  constructor(public backandService:BackandService,private calendar: Calendar,private alertCtrl: AlertController,public params: NavParams,public modalCtrl: ModalController,public loadingCtrl: LoadingController) {
      this.searchQuery = '';
      this.code_Med_Trit = this.params.get('code_Med_Trit');
      this.num_patient = this.params.get('num_patient');
      console.log(this.num_patient);
      if(this.num_patient === 0 )
        this.chargeRdv(this.code_Med_Trit);
      else
        this.chargeRdvPatient(this.num_patient);


/*
     this.Event[event.numRDV].startDate.setMinutes(this.Event[event.numRDV].startDate.getMinutes() + (10*i));
     this.Event[event.numRDV].endDate.setHours(this.Event[event.numRDV].startDate.getHours() + 1);*/

  }

  public createEvent(Event):void{

    let options:any = {
      firstReminderMinutes:5
    };
    // console.log(this.Event);
    var EvCreate =this.Event.filter(item => item.id== Event)[0];
    this.calendar.createEventWithOptions(EvCreate.title, null,EvCreate.note,EvCreate.startDate,EvCreate.endDate, options).then(() => {

      this.showAlert('createEvent Success');});
  }

  public deleteEvent(Event):void{
    var EvCreate =this.Event.filter(item => item.id== Event)[0];
    this.calendar.deleteEvent(EvCreate.title, null,EvCreate.note,EvCreate.startDate,EvCreate.endDate).then(data => {
      this.showAlert('deleteEvent'+Event+' Success');});
  }

  public openCalendar(Event):void{
    var EvCreate =this.Event.filter(item => item.id== Event)[0];
    this.calendar.openCalendar(EvCreate.startDate);
  }

  public openCalendar_():void{
    this.calendar.openCalendar(this.rdvs["0"].start_date);
  }

  showAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Notification !!',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

  public chargeRdv(code_Med_Trit){
    var log=this.showloading();

    this.backandService.object.getList('RDV',{  "filter": [ { "fieldName": "num_medecin_trait", "operator": "equals", "value": code_Med_Trit } ], "deep": true, "relatedObjects": true ,"sort":[ {    "fieldName": "start_date",    "order": "desc"  }] })
      .then(
        data => {
          // console.log(data.data);
          this.rdvs = data.data;
          if(this.rdvs.length==0)
            this.showAlert("La liste des Rendez-Vous est vide!!");
          else {
            this.Event =[];
            for(let event of this.rdvs) {
              // console.log(event);
              this.Event.push({
                id: event.numRDV,
                title: event.typeRDV,
                note: event.descpRDV,
                startDate: new Date(event.start_date),
                endDate: new Date(event.end_date),
                titleUpdated: 'Event updated',
                noteUpdated: 'We update the event !'
              });
            }
          }
          log.dismiss();
          console.log('events',this.Event);
        },
        err => {console.log(err);this.showAlert("ERREUR LORS DU CHARGEMENT DE LA BASE DE DONNEES, VERIFIER VOTRE CONNEXION");log.dismiss();}
      );

  }

  public chargeRdvPatient(num_patient){
    var log=this.showloading();

    this.backandService.object.getList('RDV',{  "filter": [{ "fieldName": "num_patient", "operator": "equals", "value": num_patient } ], "deep": true, "relatedObjects": true ,"sort":[ {    "fieldName": "start_date",    "order": "desc"  }] })
      .then(
        data => {
          // console.log(data.data);
          this.rdvs = data.data;
          if(this.rdvs.length==0)
            this.showAlert("La liste des Rendez-Vous est vide!!");
          else {
            this.Event =[];
            for(let event of this.rdvs) {
              // console.log(event);
              this.Event.push({
                id: event.numRDV,
                title: event.typeRDV,
                note: event.descpRDV,
                startDate: new Date(event.start_date),
                endDate: new Date(event.end_date),
                titleUpdated: 'Event updated',
                noteUpdated: 'We update the event !'
              });
            }
          }
          log.dismiss();
          console.log('events',this.Event);
        },
        err => {console.log(err);this.showAlert("ERREUR LORS DU CHARGEMENT DE LA BASE DE DONNEES, VERIFIER VOTRE CONNEXION");log.dismiss();}
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

  openModal(RdvObj) {
    let modal = this.modalCtrl.create(DetailsRdv, RdvObj);
    modal.present();
  }

  public getItems(refresher) {
    this.chargeRdv(this.code_Med_Trit);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);

  }

  public filterItems(searchbar) {
    // set q to the value of the searchbar
    var q = searchbar;

    // if the value is an empty string don't filter the items
    if (!q || q.trim() == '') {
      this.chargeRdv(this.code_Med_Trit);
      return;
    }
    else{
      q = q.trim();
    }



    this.backandService.object.getList('RDV',{  "filter": [ { "fieldName": "num_medecin_trait", "operator": "equals", "value": "M"+this.code_Med_Trit },{ "fieldName": "numRDV", "operator": "equals", "value":q} ], "deep": true, "relatedObjects": false })
      .then(
        data => {
          console.log("subscribe", data);
          this.rdvs = data.data;
        },
        err => console.log(err)
      );
  }

}


@Component({
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <img style=" width: 25px; margin-bottom: -6px; margin-left: -10px; " src="./assets/img/picto-rdv.png"> Rendez-Vous N°{{rdv.numRDV}}
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
          Détails <br/>Rendez-vous
          <ion-note item-right>
            <div class="feat_small_details">
              <h4 style=" width: 120%;"> Rendez-Vous Pour le Patient N°{{rdv.num_patient}}</h4>
              <a  data-transition="slidefade" >
                <span text-uppercase style="color:cornflowerblue;">{{rdv.descpRDV}}</span>
                <div style="margin-left: 20px;">
                  <p class="rowp"><span>Type :{{rdv.typeRDV}}</span> </p>
                  <p class="rowp"><span>Start Date :{{rdv.start_date | date:'dd/MM/yy HH:mm'}}</span> </p>
                  <p class="rowp"><span>Fin Date :{{rdv.end_date | date:'dd/MM/yy HH:mm'}}</span> </p>
                </div>
              </a>
            </div>
          
          </ion-note>
        </ion-item>

      </ion-list>
    </ion-content>
  `
})

export class DetailsRdv {
  rdv:any[] = [];
  constructor(private alertCtrl: AlertController,public platform: Platform,public params: NavParams,public viewCtrl: ViewController) {
    this.rdv = this.params.get('RdvObj');
    console.log(this.rdv);
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
