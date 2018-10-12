import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Tooth, ToothVM } from './tooth.model';

@Component({
  selector: 'asm-jaw',
  templateUrl: './jaw.component.html',
  styleUrls: ['./jaw.component.scss']
})
export class JawComponent implements OnChanges {
  @Input() isReadOnly = false;
  @Input() topJawLabel = 'TOP';
  @Input() teeth: Array<ToothVM>;

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

    this._teeth = this.mergeToothArrays(
      this.getDefaultTeethArray(),
      changedTeeth
    );
  }

  onToothClick(tooth: Tooth) {
    this.toothClick.next(tooth);

    if (tooth && !this.isReadOnly) {
      tooth.selected = !tooth.selected;
      this.teethChange.next(
        this.getModifiedTeeth(this._teeth)
      );
    }
  }

  onToothMouseOver(tooth: Tooth) {
    this.toothMouseOver.next(tooth);
  }

  onToothMouseOut(tooth: Tooth) {
    this.toothMouseOut.next(tooth);
  }

  private getDefaultTeethArray(): Array<Tooth> {
    const teethModels: Array<ToothVM> = [
      {
        id: 11,
        isFront: true,
        highlightPath: 'M104.78,27c.35,5.06-2.67,9.9-6.72,10.76s-8.78-2.33-10.52-7.09l-3-8.24a7.79,7.79,0,0,1,5.85-10.58L94.52,11a7.79,7.79,0,0,1,9.65,7.27Z',
        shadowPath: 'M102.75,24.84c.34,5-2,9.62-5.26,10.31s-7.29-2.58-9-7.27l-1.24-3.4a7.88,7.88,0,1,1,15.26-3.25Z',
        labelTransform: 'translate(88.16 27.56)'
      },
      {
        id: 48,
        isFront: false,
        highlightPath: 'M16.59,226l7.92-.33c5.63-.23,10-5.41,9.77-11.52l-.23-5.46c-.25-6.1-5.06-10.9-10.69-10.66l-7.92.33c-6.57.27-11.8,5.18-11.89,11,0,.19,0,.38,0,.57l.23,5.46c0,.19,0,.38,0,.57C4.4,221.79,10,226.24,16.59,226Z',
        shadowPath: 'M16.59,226l12.11-.5c6.79-.28,12.13-5.5,11.88-11.6l-.23-5.46c-.25-6.1-6-10.86-12.8-10.58l-12.11.5c-6.57.27-11.8,5.18-11.89,11,0,.19,0,.38,0,.57l.23,5.46c0,.19,0,.38,0,.57C4.4,221.79,10,226.24,16.59,226Z',
        labelTransform: 'translate(13.4 216.09)'
      },
    ];

    return teethModels;
  }

  private isModifiedTooth(tooth: Tooth): boolean {
    return (tooth.selected || !!tooth.styleClass);
  }

  private getModifiedTeeth(teeth: Array<Tooth>): Array<Tooth> {
    return teeth.filter(this.isModifiedTooth);
  }

  private mergeToothArrays(src: Array<Tooth>, dst: Array<Tooth>): Array<Tooth> {
    return src.map(tooth => {
      // const found = (dst || []).find(t => t.id === tooth.id);
      // return { ...tooth, ...found };
      return (dst || []).find(t => t.id === tooth.id) || tooth;
    });
  }
}
