import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-statistique',
  templateUrl: 'statistique.html'
})
export class StatistiquePage {

  // chartData = {
  //   chart: {
  //     type: 'column'
  //   },
  //   title: {
  //     text: 'Statistiques du Cabinet'
  //   },
  //   xAxis: {
  //     categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12]
  //   },
  //   series: [
  //     {
  //       name: 'Consultation',
  //       data: [7, 8, 6,0, 15, 10, 3, 3,3, 2, 2,0]
  //     }, {
  //       name: 'Ordonnance',
  //       data: [7, 4, 5, 9, 7, 3, 1, 7,8, 6, 2,1]
  //     }, {
  //       name: 'Actes Médical',
  //       data: [2, 5,2, 7, 0, 3, 4,4, 7, 3, 2,1]
  //     }, {
  //       name: 'Bilan',
  //       data: [1, 8, 5, 0, 1, 3, 4, 4, 2, 4, 2,5]
  //     }, {
  //       name: 'Lettre de laission',
  //       data: [1, 2, 1, 1, 1,5, 9, 4, 2, 4, 2,5]
  //     }, {
  //       name: 'Rendez-vous',
  //       data: [6, 1, 1, 1, 9,3, 4, 4, 2, 3, 2,5]
  //     }
  //   ]
  // };

  constructor(public navCtrl: NavController) {

  }

}
