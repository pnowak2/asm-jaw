import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Tooth } from './jaw/tooth.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  teeth: Array<Tooth> = [
    {
      id: 28,
      styleClass: 'testing'
    },
    {
      id: 26,
      styleClass: 'testing'
    },
    {
      id: 21,
      styleClass: 'testing'
    }
  ];

  onToothToggle(tooth: Tooth) {
    console.log('toggled tooth', tooth);
  }

  onToothMouseOver(tooth: Tooth) {
    console.log('mouse overed tooth', tooth);
  }

  onToothMouseOut(tooth: Tooth) {
    console.log('mouse outed tooth', tooth);
  }

  onDataChange() {
    this.teeth = [
      {
        id: 28
      },
      {
        id: 26
      }
    ];
  }
}
