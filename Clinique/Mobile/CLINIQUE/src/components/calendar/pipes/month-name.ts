import {Pipe} from '@angular/core';

@Pipe({
  name: 'monthName'
})
export class monthName {
  private lang: string; // (fr or en)
  transform(value, args) {
    if (args === 'es') { this.lang = 'es'; }
    let monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    if (this.lang === 'fr') {
      monthNames = [ 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ];
    }
    return monthNames[value - 1];
  }
}
