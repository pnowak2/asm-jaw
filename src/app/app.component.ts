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
    { id: 28, styleClass: 'asm-tooth--rejected' },
    { id: 26, styleClass: 'asm-tooth--reimbursed', selected: true },
    { id: 21, styleClass: 'asm-tooth--reimbursed' },
    { id: 45, styleClass: 'asm-tooth--reimbursed' },
    { id: 33, styleClass: 'asm-tooth--reimbursed' }
  ];

  toothOver: Tooth;
  toothOut: Tooth;
  teethChange: Array<Tooth>;
  toothClicked: Tooth;

  onToothClick(tooth: Tooth) {
    this.toothClicked = tooth;
  }

  onTeethChange(teeth: Array<Tooth>) {
    this.teethChange = teeth;
  }

  onToothMouseOver(tooth: Tooth) {
    this.toothOver = tooth;
  }

  onToothMouseOut(tooth: Tooth) {
    this.toothOut = tooth;
  }

  onInitTeeth() {
    this.teeth = [
      { id: 11, styleClass: 'asm-tooth--rejected' },
      { id: 15, styleClass: 'asm-tooth--reimbursed', selected: true },
      { id: 18, styleClass: 'asm-tooth--reimbursed' },
      { id: 43, styleClass: 'asm-tooth--reimbursed' },
      { id: 36, styleClass: 'asm-tooth--rejected' },
    ];
  }
}
