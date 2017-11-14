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
  messages = [];
  patient :any;
  nickname = '';
  message = '';
  login :string;

  constructor( private http: Http,private navCtrl: NavController, private navParams: NavParams, private stomp: StompService, private toastCtrl: ToastController) {
    this.patient = this.navParams.get('patient');
    this.nickname = this.patient.num_fich_patient;


    // start connection
    let originalOnConnect = stomp.onConnect;
    stomp.onConnect = (frame: any) => {
      originalOnConnect(frame);
     // this.subscription = stomp.subscribe('/user/queue/chatSend', this.responseSend);
      this.subscription = stomp.subscribe('/user/queue/chatRecive', this.responseEmit);
    };
    stomp.startConnect().then(() => {
      stomp.done('init');
    });


  }


//response
  public responseEmit = (data) => {
    console.log('Soket subscribed ');
    let observable = new Observable(observer => {
      observer.next(data.content);
    });
    let ob;
    if(data.user.toString() !== 'admin')
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

  //response
  public responseSend = (data) => {
    console.log('Soket subscribed ');
    let observable = new Observable(observer => {
      observer.next(data.content);
    });

    let ob={
      'from':'send',
      'content':data.content,
      'created': new Date(),

    };
    this.messages.push(ob);
    return observable;

  };

  sendMessage() {
    var headers = new Headers();
    // Website you wish to allow to connect
    headers.append('Content-Type','application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers, withCredentials: true  });

    let msg =this.patient.num_fich_patient+':'+this.patient.prenom+' '+this.patient.nom+':'+this.message;
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('msg',this.message);
    urlSearchParams.append('user', 'admin');

    let urlSearchParams_ = new URLSearchParams();
    urlSearchParams_.append('msg',msg);
    urlSearchParams_.append('user', 'admin');

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



  getUsers() {
    // let observable = new Observable(observer => {
    //   this.socket.on('users-changed', (data) => {
    //     observer.next(data);
    //   });
    // });
    // return observable;
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
