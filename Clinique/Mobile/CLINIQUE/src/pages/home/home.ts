import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams, PopoverController} from 'ionic-angular';
import {BackendProvider} from "../../providers/backend/backend";
import {NotificationsPage} from "../notifications/notifications";
import {FormControl} from "@angular/forms";
import {AccountPage} from "../account/account";
import {DetailPage} from "../detail/detail";
import {ChatPage} from "../chat/chat";
import {AgendaPage} from "../agenda/agenda";
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  searchTerm: string = '';
  searchControl: FormControl;
  searching: any = false;
  params: any = {};
  showItems: boolean = false;
  items : any =[];
  parameters :any;
  dDate: Date = new Date();
  // search conditions
  public checkin = {
    name: "Date Début",
    date: this.dDate.toISOString()
  };

  public checkout = {
    name: "Date fin",
    date: new Date(this.dDate.setDate(this.dDate.getDate() + 1)).toISOString()
  };
  toUser : {toUserId: string, toUserName: string};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service :BackendProvider,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public paramsNav: NavParams) {

        this.toUser = {
          toUserId:'210000198410281948',
          toUserName:'admin'
        };

        this.menuCtrl.swipeEnable(true, 'authenticated');
        this.searchControl = new FormControl();
        this.parameters=this.paramsNav.get('parametres');


        this.params.data = {
          "button" : "Ok",
          "header" : "ListePatients",
          "items" : this.items,
          "subtitle" : "",
          "title" : ""
        };

        this.params.events = {
          'onItemClick': function(item: any) {
            console.log("onItemClick");
            navCtrl.push(DetailPage,{'Patient':item});
          },
          'onDelete': function(item: any) {
            console.log("onDelete");
          },
          'onButtonGetClick': function(item: any) {
            console.log("onButtonGetClick");
          }
        };
        this.getPatientsPartager();
        this.getPatients();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    // this.searchControl.valueChanges.pipe(
    //
    //   debounceTime(700)
    //
    // ).subscribe(search => {
    //
    //   this.searching = false;
    //   this.setFilteredItems();
    //
    // });
  }


  getPatients(){
    let param ={
      'codeMedTrit':this.parameters.codeMedTrit
    };

    this.service.get('PatientByCodMed',param).subscribe(
      (data : any) =>{

        this.params.data.title = data.length +" Patients ";
        this.params.data.subtitle = " 3 Rdv Pour Aujourd'hui";
        // this.items = [];
        // this.params.data.items = [];
        for(let p of data){

          this.items.push(
            {
              "delate": "Supp",
              "patient":p,
              "icon": {
                'assurCnam': p.assurCnam,
                'codeApci': p.codeApci,
                'autreAssur': p.autreAssur
              },
              "id": p.numFichPatient,
              "reply": "Archive",
              "img":this.ImgProfile(p.datenaiss,p.sexe),
              "subtitle": p.numFichPatient,
              "Partage":'non',
              "textIcon": this.getAge(p.datenaiss) +"ans",
              "title": p.nom + " " +p.prenom
            } );
          this.params.data.items = this.items;
        }
      },
      error =>{

      }
    )
  }

  getPatientsPartager(){
    let param ={
      'codeMedTrit':this.parameters.codeMedTrit
    };

    this.service.get('PatientPartagByCodMed',param).subscribe(
      (data : any) =>{

        this.params.data.title = data.length +" Patients ";
        this.params.data.subtitle = " 3 Rdv Pour Aujourd'hui";
        this.items = [];
        this.params.data.items = [];
        for(let p of data){

          this.items.push(
            {
              "delate": "Supp",
              "patient":p,
              "icon": {
                'assurCnam': p.assurCnam,
                'codeApci': p.codeApci,
                'autreAssur': p.autreAssur
              },
              "id": p.numFichPatient,
              "reply": "Archive",
              "img":this.ImgProfile(p.datenaiss,p.sexe),
              "subtitle": p.numFichPatient,
              "Partage":'oui',
              "textIcon": this.getAge(p.datenaiss) +"ans",
              "title": p.nom + " " +p.prenom
            } );
          this.params.data.items = this.items;
        }
      },
      error =>{

      }
    )
  }
  public getAge(date){
    var d = new Date();
    var d1 = new Date(date);
    var age =d.getFullYear()- d1.getFullYear();
    if(age==0)
      age=1;
    return  age;
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

  goToAccount() {
    console.log('Acount');
    this.navCtrl.push(AccountPage);
  }

  viewRDV(){
    this.navCtrl.push(AgendaPage,{toUser:this.toUser,param:this.parameters,week :{checkin :this.checkin,checkout:this.checkout}});
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

  onSearchInput(ev: any){
    //this.searching = true;
    //this.getPatients();
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items

    if (val && val.trim() != '') {
      this.showItems = true;
      this.params.data.items = this.items.filter((item) => {
        return (item.title.toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
      });

    } else {
      this.params.data.items =this.items;
      this.showItems = false;
    }
  }

  itemSelected(item: any) {
    this.searchTerm = item.title;
    this.params.data.items = [item];
      this.showItems = false;
  }

  setFilteredItems() {
    this.params.data.items = this.filterItems(this.searchTerm);

  }

  filterItems(searchTerm){
    return this.items.filter((item) => {
      return item.title.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.getPatientsPartager();
    this.getPatients();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  callChat() {
    this.navCtrl.push(ChatPage,{toUser:this.toUser,param:this.parameters});
  }

}
