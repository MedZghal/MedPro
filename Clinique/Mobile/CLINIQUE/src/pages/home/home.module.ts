import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {SwipeToDismissLayout1Module} from "../../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module";

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    SwipeToDismissLayout1Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
