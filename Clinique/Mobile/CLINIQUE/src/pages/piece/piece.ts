import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ViewController} from 'ionic-angular';
import {BackendProvider} from "../../providers/backend/backend";

/**
 * Generated class for the PiecePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-piece',
  templateUrl: 'piece.html',
})
export class PiecePage {

  patient :any ;
  params: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service: BackendProvider,
    public loadingCtrl :LoadingController,
    public viewCtrl : ViewController) {
    this.patient =this.navParams.get('Patient');
    this.params.data = {
      "items": []
    };

    this.params.data.fullscreen = "ItemDetailsPageFullScreenGallery";

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PiecePage');
    this.getFileUpload(this.patient.numFichPatient);


  }

  getFileUpload(patient){
    let param ={
      num_patient :patient
    };

    let log = this.showloading();
    this.service.get('GetFileUpload',param).subscribe(
      data => {
        this.params.data.items = data ;
        log.dismiss();
      },
      error => {

      }
    )
  }

  public showloading(){
    let loading = this.loadingCtrl.create({
      content: "Chargement de pièce jointe...",
      spinner: 'bubbles'
    });
    loading.present();
    return loading;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
