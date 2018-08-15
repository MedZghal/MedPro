import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendaPage } from './agenda';
import {CalendarModule} from "../../components/calendar/calendar.module";
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    AgendaPage,
  ],
  imports: [
    PipesModule,
    CalendarModule,
    IonicPageModule.forChild(AgendaPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AgendaPageModule {}
