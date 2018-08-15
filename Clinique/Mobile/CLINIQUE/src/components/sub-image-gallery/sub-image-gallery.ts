import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PhotoViewer} from "@ionic-native/photo-viewer";

@IonicPage()
@Component({
    selector: 'sub-image-gallery',
    templateUrl: 'sub-image-gallery.html'
})
export class SubImageGallery {

    @Input() data: any;
    @Input() events: any;

    constructor(public navCtrl: NavController, navParams: NavParams,private photoViewer: PhotoViewer) { }

    onEvent = (event: string, item, e): void => {
        if (e) {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](item);
        }
    }

    openImageSlider = (item: any, index: number): any => {
        // this.navCtrl.push(group.fullscreen, {
        //     'group': group.items,
        //     'index': index
        // });
      let options = {
        share: true, // default is false
        closeButton: true, // default is true
        copyToReference: true // default is false
      };
      this.photoViewer.show(item.img, 'N°'+item.id +'Date Upload : '+this.to_DatesTRING(item.dateUplode), options);
    };

  to_DatesTRING(date){
    return (new Date(date)).toLocaleDateString();
  }
}
