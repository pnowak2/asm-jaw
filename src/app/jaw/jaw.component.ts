import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { Tooth } from './tooth.model';

@Component({
  selector: 'asm-jaw',
  templateUrl: './jaw.component.html',
  styleUrls: ['./jaw.component.scss']
})
export class JawComponent implements OnInit {
  @Input() isReadOnly = false;
  @Input() topJawLabel = 'TOP';

  @Input()
  set data(data: Array<Tooth>) {
    this.teeth = this.teeth.map(tooth => {
      return (data || []).find(item => item.id === tooth.id) || tooth;
    });
  }

  @Output() toothSeletionToggle = new EventEmitter<Tooth>();
  @Output() toothMouseOver = new EventEmitter<Tooth>();
  @Output() toothMouseOut = new EventEmitter<Tooth>();

  private teeth: Array<Tooth>;
  private toothNumbers = [
    11, 12, 13, 14, 15, 16, 17, 18,
    21, 22, 23, 24, 25, 26, 27, 28,
    31, 32, 33, 34, 35, 36, 37, 38,
    41, 42, 43, 44, 45, 46, 47, 48,
  ];

  constructor() {
    this.teeth = this.toothNumbers.map((id) => ({ id }));
  }

  ngOnInit() {
  }

  onToothClick(id: number) {
    if (!this.isReadOnly) {
      const tooth = this.getTooth(id);
      if (tooth) {
        tooth.selected = !tooth.selected;
        this.toothSeletionToggle.next(tooth);
      }
    }
  }

  onToothMouseOver(id: number) {
    const tooth = this.getTooth(id);
    this.toothMouseOver.next(tooth);
  }

  onToothMouseOut(id: number) {
    const tooth = this.getTooth(id);
    this.toothMouseOut.next(tooth);
  }

  getTooth(id: number): Tooth {
    return this.teeth.find(tooth => tooth.id === id);
  }

}
