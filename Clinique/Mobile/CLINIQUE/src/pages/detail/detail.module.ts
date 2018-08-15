import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPage } from './detail';
import {ExpandableLayout1Module} from "../../components/list-view/expandable/layout-1/expandable-layout-1.module";


@NgModule({
  declarations: [
    DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailPage),
    ExpandableLayout1Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetailPageModule {}
