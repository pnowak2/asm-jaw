import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Boob } from './jaw/model/boob.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  boobs: Array<Boob> = [];

  onBoobClick(tooth: Boob) {
    console.log('tooth click', tooth.id);
  }
}
