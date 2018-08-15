import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PiecePage } from './piece';
import {FullScreenGalleryModule} from "../../components/full-screen-gallery/full-screen-gallery.module";
import {SubImageGalleryModule} from "../../components/sub-image-gallery/sub-image-gallery.module";

@NgModule({
  declarations: [
    PiecePage,
  ],
  imports: [
    IonicPageModule.forChild(PiecePage),
    SubImageGalleryModule, FullScreenGalleryModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PiecePageModule {}
