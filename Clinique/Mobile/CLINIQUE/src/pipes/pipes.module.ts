import { NgModule } from '@angular/core';
import { RelativeTimePipe } from './relative-time/relative-time';
import { FiltertxtPipe } from './filtertxt/filtertxt';
@NgModule({
	declarations: [RelativeTimePipe,
    FiltertxtPipe],
	imports: [],
	exports: [RelativeTimePipe,
    FiltertxtPipe]
})
export class PipesModule {}
