import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {BackendProvider} from "../../providers/backend/backend";
import * as moment from "moment";

/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface rdvlist{
  startDate :string,
  items :any[]
}

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {
  currentEvents:any =[];
  rdvs :rdvlist[] =[];
  params: any = {};
  weekStart :any ;
  weekEnd :any ;
  week :any ;
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public backend : BackendProvider) {
        this.params=this.navParams.get('param');
        this.week=this.navParams.get('week');
        if(this.week == null)
          this.GetWeekDate(new Date());
        else{
          this.weekStart= this.to_DatesTRING(this.week.checkin.date);
          this.weekEnd=this.to_DatesTRING(this.week.checkout.date);
        }

        this.Refresh();
        this.EventsList(this.params.codeMedTrit);

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad KalenderKeretaPage');

  }

  onDaySelect(event){
    console.log(event);
    let d= event.year+'/'+(event.month +1 )+'/'+event.date;
    let locldate = new Date(d).toLocaleDateString();
    this.weekStart= locldate;
    this.weekEnd=  locldate;

    this.RdvList(this.params.codeMedTrit,d,d+' 23:60:00');
  }

  onMonthSelect(event){
    console.log(event);
    let ds= event.year+'/'+(event.month +1 )+'/01';
    let df= event.year+'/'+(event.month +2 )+'/01';
    let locldates = new Date(ds).toLocaleDateString();
    let locldatef = new Date(df).toLocaleDateString();
    this.weekStart= locldates;
    this.weekEnd=  locldatef;
    this.RdvList(this.params.codeMedTrit,ds,df+' 23:60:00');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }


  RdvList(codeMedTrit,startDate,endDate){
    let param ={
      num_med :codeMedTrit,
      datestart :startDate ,
      datefin :endDate
    };

    this.backend.get('GetRdvbyMedDate',param).subscribe(
      (data :any) => {
            this.rdvs =[];

            for(let r of data){

              let rdvdata = [];
              for(let rv of data){
              if(this.to_DatesTRING(r.startDate) === this.to_DatesTRING(rv.startDate))
                rdvdata.push(rv);
              }

             if(this.verifExisteDATE(this.to_DatesTRING(r.startDate)))
               this.rdvs.push({
                 startDate : this.to_DatesTRING(r.startDate),
                 items : rdvdata
               })
            }

      },
      error =>{

      }
    )
  }

  EventsList(codeMedTrit){
    let param ={
      num_med :codeMedTrit,
    };

    this.backend.get('GetRdvbyMed',param).subscribe(
      (data :any) => {
        this.currentEvents = [];
              for(let r of data){
                let dd = new Date(r.startDate);
                this.currentEvents.push({
                  year: dd.getFullYear(),
                  month: dd.getMonth(),
                  date: dd.getDate()
                });
              }
      },
      error =>{

      }
    )
  }

  to_DatesTRING(date){
    return (new Date(date)).toLocaleDateString();
  }

  verifExisteDATE(date){

    for(let r of this.rdvs){
       if(r.startDate.toString() === date.toString())
         return false;
    }
    return true
  }

  Refresh(){
    this.RdvList(this.params.codeMedTrit,this.FormatDDMMYYYY(this.weekStart),this.FormatDDMMYYYY(this.weekEnd)+ ' 23:60:00');
  }

  GetWeekDate(date){
    let selectedDate;
    if(date == '')
      selectedDate = moment(new Date());
    else
        selectedDate = moment(date);

    //If you want to get the ISO week format(Monday to Sunday)
    this.weekStart =this.FormatDDMMYYYY(selectedDate.clone().startOf(<moment.unitOfTime.StartOf>'isoweek').format('L'));
    this.weekEnd = this.FormatDDMMYYYY(selectedDate.clone().endOf(<moment.unitOfTime.StartOf>'isoweek').format('L'));
  }

  GetWeekEvent(op){

    let nextDay : any;
    if(op =='+'){
      let datesr = this.FormatDDMMYYYY(this.weekEnd);
      nextDay = moment(new Date(datesr)).add(1, 'days');
    }else{
      let datesr = this.FormatDDMMYYYY(this.weekStart);
      nextDay = moment(new Date(datesr)).subtract(1, 'days');
    }

    this.GetWeekDate(nextDay);
    this.Refresh();
  }

  FormatDDMMYYYY(date){
    let dd = date.toString().split('/');
    return dd[2]+'/'+dd[1]+'/'+dd[0];
  }

  RefreshWeek(){
    this.GetWeekDate('');
    this.Refresh();
  }
}
