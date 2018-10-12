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
  teeth: Array<Tooth> = [];
  isReadOnly = false;
  teethNumbers;

  onToothClick(tooth: Tooth) {
    console.log('tooth click', tooth);
  }

  onTeethChange(teeth: Array<Tooth>) {
    console.log('tooth change', teeth);
  }

  onToothMouseOver(tooth: Tooth) {
    console.log('tooth over', tooth);
  }

  onToothMouseOut(tooth: Tooth) {
    console.log('tooth out', tooth);
  }

  onToggleMode() {
    this.isReadOnly = !this.isReadOnly;
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

  onAllTeeth() {
    this.teethNumbers = null;
  }

  onBackTeeth() {
    this.teethNumbers = [
      14, 15, 16, 17, 18, 24, 25, 26, 27, 28,
      34, 35, 36, 37, 38, 44, 45, 46, 47, 48,
    ];
  }

  onFrontTeeth() {
    this.teethNumbers = [
      11, 12, 13, 21, 22, 23, 31, 32, 33, 41, 42, 43];
  }
}
