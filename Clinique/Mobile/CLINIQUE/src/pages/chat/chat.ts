import {Component, ElementRef, ViewChild} from '@angular/core';
import {Content, IonicPage, NavParams} from 'ionic-angular';
import {ChatMessage, UserInfo} from '../../providers/chat/chat';
import {BackendProvider} from "../../providers/backend/backend";
import { StompService } from 'ng2-stomp-service';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: ElementRef;
  msgList: ChatMessage[] = [];
  toUser: UserInfo;
  user: UserInfo;
  editorMsg = '';
  patient :any;
  showEmojiPicker = false;
  parameters :any;

  constructor(navParams: NavParams,
              private MsgServ: BackendProvider,
              private stomp: StompService) {
    // Get the navParams toUserId parameter
    this.patient = navParams.get('param').patient;
    this.parameters = navParams.get('param');
    console.log(this.parameters);

    this.user = {
      id: this.parameters.codeMedTrit.toString(),
      name: this.parameters.username,
      avatar:'./assets/img/avatars/doctor-.png'
    };

    this.toUser = {
      id: '1',
      name: 'secretaire'
    };


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
    console.log(data);
    data.status ='success';
    this.pushNewMsg(data);
  };

  ionViewWillLeave() {
    this.stomp.disconnect();
  }

  ionViewDidEnter() {
    //get message list
    this.getMsg();

  }

  onFocus() {
    this.showEmojiPicker = false;
    this.content.resize();
    this.scrollToBottom();
  }

  switchEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
    if (!this.showEmojiPicker) {
      this.focus();
    } else {
      this.setTextareaScroll();
    }
    this.content.resize();
    this.scrollToBottom();
  }

  /**
   * @name getMsg
   * @returns {Promise<ChatMessage[]>}
   */
  getMsg() {
    // Get mock message list
    return this.MsgServ
      .get("ChatMsg")
      .subscribe((res : any) => {
        this.msgList = res;
        this.scrollToBottom();
      });
  }

  /**
   * @name sendMsg
   */
  sendMsg() {
    if (!this.editorMsg.trim()) return;

    // Mock message
    const id = Date.now().toString();
    console.log(id);
    let newMsg: ChatMessage = {
      messageId: Date.now().toString(),
      userId: this.user.id,
      userName: this.user.name,
      userAvatar: this.user.avatar,
      toUserId: this.toUser.id,
      time: Date.now(),
      message: this.editorMsg,
      status: 'pending'
    };

    this.editorMsg = '';

    if (!this.showEmojiPicker) {
      this.focus();
    }

    this.stomp.send('/user/queue/chatRecive',newMsg);

  }

  /**
   * @name pushNewMsg
   * @param msg
   */
  pushNewMsg(msg: ChatMessage) {
    const userId = this.user.id,
      toUserId = this.toUser.id;
    // Verify user relationships
    console.log(msg.userId === userId && msg.toUserId === toUserId);
    console.log(msg.toUserId === userId && msg.userId === toUserId);
    if (msg.userId === userId && msg.toUserId === toUserId) {
      this.msgList.push(msg);
    } else if (msg.toUserId === userId) {
      this.msgList.push(msg);
    }
    this.scrollToBottom();
  }

  getMsgIndexById(id: string) {
    return this.msgList.findIndex(e => e.messageId === id)
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400)
  }

  private focus() {
    if (this.messageInput && this.messageInput.nativeElement) {
      this.messageInput.nativeElement.focus();
    }
  }

  private setTextareaScroll() {
    const textarea =this.messageInput.nativeElement;
    textarea.scrollTop = textarea.scrollHeight;
  }


}


