import { Component } from '@angular/core';
import { Tooth } from './jaw/tooth.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  teeth: Array<Tooth> = [
    {
      id: 28,
      selected: true
    },
    {
      id: 26,
      reimbursed: true
    }
  ];

  onToothToggle(tooth: Tooth) {
    console.log('toggled tooth', tooth);
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
