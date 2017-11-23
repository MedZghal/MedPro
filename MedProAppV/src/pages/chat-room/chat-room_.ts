import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { StompService } from 'ng2-stomp-service';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions,URLSearchParams } from '@angular/http';


@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html'
})
export class ChatRoomPage_ {
  private subscription : any;
  parameters:any = [];
  public utilisateurs:any = [];
  messages = [];
  patient :any;
  nickname = '';
  message = '';
  code_Med_Trit:number;
  username :string;

  constructor( private http: Http,private navCtrl: NavController, private navParams: NavParams, private stomp: StompService, private toastCtrl: ToastController) {
    this.patient = this.navParams.get('patient');
    this.parameters = this.navParams.get('param');
    console.log(this.parameters);
    this.code_Med_Trit = this.navParams.get('param').codeMedTrit;
    this.username = this.navParams.get('param').username;
    this.nickname = this.patient.numFichPatient;
    this.chargeListUtilisateur(this.code_Med_Trit);

    // start connection

    stomp.startConnect().then(() => {
      this.stomp.done('init');
      stomp.after('init').then(()=>{
        stomp.subscribe('/user/queue/chatRecive',this.responseEmit);
      });
    });


  }


//response
  public responseEmit = (data) => {
    console.log('Soket subscribed ');
    let observable = new Observable(observer => {
      observer.next(data.content);
    });
    let ob;
    if(data.user.toString() !== this.username)
      ob ={
        'from':'emit',
        'user':data.user,
        'content':data.content,
        'created': new Date(),
      };
    else
      ob={
        'from':'send',
        'user':data.user,
        'content':data.content,
        'created': new Date(),

      };
    this.messages.push(ob);
    return observable;

  };


  sendMessage(user) {
    var headers = new Headers();
    // Website you wish to allow to connect
    headers.append('Content-Type','application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers, withCredentials: true  });

    let msg =this.patient.numFichPatient+':'+this.patient.prenom+' '+this.patient.nom+':'+this.message;
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('msg',this.message);
    urlSearchParams.append('user', user);

    let urlSearchParams_ = new URLSearchParams();
    urlSearchParams_.append('msg',msg);
    urlSearchParams_.append('user', user);

    this.http.post("https://medproapp.ddns.net/GEMP/ReciveMsg",urlSearchParams,options)
      .subscribe(
        data => {
          console.log(this.message);
        },
        error => {
          console.log(JSON.stringify(error.json()));
        }
      );
    this.http.post("https://medproapp.ddns.net/GEMP/SendMsg",urlSearchParams_,options)
      .subscribe(
        data => {
          console.log(this.message);
        },
        error => {
          console.log(JSON.stringify(error.json()));
        }
      );
    this.message = '';

  }



  public chargeListUtilisateur(code_Med_Trit){
    var headers = new Headers();
    // Website you wish to allow to connect
    headers.append('Content-Type','application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers, withCredentials: true});

    this.http.get("https://medproapp.ddns.net/GEMP/Utilisateurs",options)
      .map(res => res.json())
      .subscribe(
        data => {
          console.log(data);

          for(let user of data){
            if(code_Med_Trit == user.code_Med_Trit || code_Med_Trit == user.secretaire)
              this.utilisateurs.push(user);
          }
          console.log(this.utilisateurs);
          if(this.utilisateurs.length==0)
            console.log("La liste des utilisateurs est vide!!");
        },
        error => {
          console.log('Error lors de connection et chargement');
        }
      );
  }

  public sendMessages(){
    for(let user of this.utilisateurs){
      this.sendMessage(user.username);
    }
  }
  ionViewWillLeave() {
    this.stomp.disconnect();
  }

  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
