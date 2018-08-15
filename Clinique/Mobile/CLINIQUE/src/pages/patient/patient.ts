import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BackendProvider} from '../../providers/backend/backend';
/**
 * Generated class for the PatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html',
})
export class PatientPage {

  Patients : any;
  params: any = {};
  dataExpend :any  = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service :BackendProvider) {

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
    this.params.data = {
      "icon": "tail-spin",
      "header" : "Liste Patients",
      "items" : []
    };
    this.getPatients();
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad PatientPage');

  }

  getPatients(){
    this.service.get('ListPatients').subscribe(
      (data : any) =>{
        this.Patients = data;
        for(let p of data){
          if(p.assurCnam != null)
            this.dataExpend=[
              {
                "description" :  p.adresse,
                "details" :  p.ville.gouvernorat +"/"+p.ville.ville,
                "id" : 1,
                "image" : "./assets/img/map.png",
                "title" : "Ville"
              },
              {
                "description" : p.assurCnam.type,
                "details" : p.assurCnam.regimeAffi,
                "id" : p.assurCnam.numAssur,
                "image" : "./assets/img/cnam.png",
                "title" : "Assurance CNAM"
              }
              ,
              {
                "description" : p.typeApci,
                "details" : "N°"+p.codeApci,
                "id" : 2,
                "image" : "./assets/img/apci_logo_600w.png",
                "title" : "Trait APCI"
              }
            ];
          else
            this.dataExpend=[
              {
                "description" : p.adresse,
                "details" :  p.ville.gouvernorat +"/"+p.ville.ville,
                "id" : 1,
                "image" : "./assets/img/map.png",
                "title" : "Ville"
              }
            ];

          this.params.data.items.push(
            {
              "description1" : " N° :"+p.numFichPatient,
              "description2" : " Sexe :"+p.sexe,
              "description3" : " Poids :"+p.poids,
              "description4" : " GSM :"+p.gsm,
              "expandItems" : this.dataExpend,
              "id" : p.numFichPatient,
              "image" : "./assets/img/Patient.png",
              "title" : p.nom + " " +p.prenom
            } );
        }
      },
      error =>{

      }
    )
  }
}
