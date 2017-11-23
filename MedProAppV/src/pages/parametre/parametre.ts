import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-parametre',
  templateUrl: 'parametre.html'
})
export class ParametrePage {
  param:any = [];
  nom_medecin:string='';
  prenom_medecin:string = '';
  Fixe:string = '';
  GSM:string = '';
  adresse:string = '';
  code_Med_Trit:string = '';
  code_convent:string = '';
  date_naiss:string = '';
  email:string = '';
  gouvernorat:string = '';
  mnt_consultSansConv:string = '';
  montant_consult:string = '';
  num_cab:string = '';
  num_inscp_ord_med:string = '';
  salutation:string = '';
  specialite:string = '';
  tiket_moder:string = '';
  titre:string = '';
  tva_consult:string = '';
  type_consult:string = '';
  ville:string = '';


  constructor(public navCtrl: NavController,public params: NavParams) {
    this.param=this.params.get('parametre');
    this.nom_medecin=this.param.nom_medecin;
    this.prenom_medecin=this.param.prenom_medecin;
    this.date_naiss=this.param.date_naiss.toString().substring(0,10);
    this.email=this.param.email;
    this.adresse=this.param.adresse;
    this.specialite=this.param.specialite;
    this.Fixe=this.param.Fixe;
    this.GSM=this.param.GSM;
    this.titre=this.param.titre;
    this.num_cab=this.param.num_cab;
    this.num_inscp_ord_med=this.param.num_inscp_ord_med;
    this.tva_consult=this.param.tva_consult;
    this.montant_consult=this.param.montant_consult;
    this.mnt_consultSansConv=this.param.mnt_consultSansConv;


  }

}
