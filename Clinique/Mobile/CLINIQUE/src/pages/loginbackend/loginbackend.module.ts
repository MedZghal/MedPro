import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginbackendPage } from './loginbackend';
import {LoginLayout1Module} from "../../components/login/layout-1/login-layout-1.module";

@NgModule({
  declarations: [
    LoginbackendPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginbackendPage),
    LoginLayout1Module
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginbackendPageModule {}
