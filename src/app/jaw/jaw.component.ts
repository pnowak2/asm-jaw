import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Tooth } from './tooth.model';

@Component({
  selector: 'asm-jaw',
  templateUrl: './jaw.component.html',
  styleUrls: ['./jaw.component.scss']
})
export class JawComponent implements OnChanges {
  @Input() isReadOnly = false;
  @Input() topJawLabel = 'TOP';
  @Input() teeth: Array<Tooth>;

  @Output() teethChange = new EventEmitter<Array<Tooth>>();
  @Output() toothClick = new EventEmitter<Tooth>();
  @Output() toothMouseOver = new EventEmitter<Tooth>();
  @Output() toothMouseOut = new EventEmitter<Tooth>();

  private _teeth: Array<Tooth>;

  constructor() {
    this._teeth = this.getDefaultTeethArray();
  }

  ngOnChanges(changes: SimpleChanges) {
    const changedTeeth = changes['teeth'].currentValue as Array<Tooth>;

    this._teeth = this.mergeTeeth(
      this.getDefaultTeethArray(),
      changedTeeth
    );

    this.teethChange.next(
      this.getModifiedTeeth()
    );
  }

  onToothClick(id: number) {
    const tooth = this.getTooth(id);
    this.toothClick.next(tooth);

    if (tooth && !this.isReadOnly) {
      tooth.selected = !tooth.selected;
      this.teethChange.next(
        this.getModifiedTeeth()
      );
    }
  }

  onToothMouseOver(id: number) {
    this.toothMouseOver.next(
      this.getTooth(id)
    );
  }

  onToothMouseOut(id: number) {
    this.toothMouseOut.next(
      this.getTooth(id)
    );
  }

  getTooth(id: number): Tooth {
    return (this._teeth || []).find(tooth => tooth.id === id);
  }

  private getDefaultTeethArray(): Array<Tooth> {
    const toothNumbers = [
      11, 12, 13, 14, 15, 16, 17, 18,
      21, 22, 23, 24, 25, 26, 27, 28,
      31, 32, 33, 34, 35, 36, 37, 38,
      41, 42, 43, 44, 45, 46, 47, 48,
    ];

    return toothNumbers.map(this.createDefaultTooth);
  }

  private createDefaultTooth(id: number): Tooth {
    return { id };
  }

  private isModifiedTooth(tooth: Tooth): boolean {
    return (tooth.selected || !!tooth.styleClass);
  }

  private getModifiedTeeth(): Array<Tooth> {
    return this._teeth.filter(this.isModifiedTooth);
  }

  private mergeTeeth(src: Array<Tooth>, dst: Array<Tooth>): Array<Tooth> {
    return src.map(tooth => {
      return (dst || []).find(t => t.id === tooth.id) || tooth;
    });
  }
}
