import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientPage } from './patient';
import {ExpandableLayout3Module} from "../../components/list-view/expandable/layout-3/expandable-layout-3.module";
@NgModule({
  declarations: [
    PatientPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientPage),
    ExpandableLayout3Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})


export class PatientPageModule {}
