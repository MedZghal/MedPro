import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    ChatPage
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(ChatPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChatPageModule {}
