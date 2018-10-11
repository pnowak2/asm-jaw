import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Tooth } from './jaw/tooth.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  teeth: Array<Tooth> = [
    { id: 28, styleClass: 'asm-tooth--rejected' },
    { id: 26, styleClass: 'asm-tooth--reimbursed', selected: true },
    { id: 21, styleClass: 'asm-tooth--reimbursed' },
    { id: 45, styleClass: 'asm-tooth--reimbursed' },
    { id: 33, styleClass: 'asm-tooth--reimbursed' }
  ];

  toothOver: Tooth;
  toothOut: Tooth;
  toothSelected: Tooth;

  onToothToggle(tooth: Tooth) {
    this.toothSelected = tooth;
  }

  onToothMouseOver(tooth: Tooth) {
    this.toothOver = tooth;
  }

  onToothMouseOut(tooth: Tooth) {
    this.toothOut = tooth;
  }
}
