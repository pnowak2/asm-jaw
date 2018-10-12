import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Tooth } from '../model/tooth.model';
import { JawService } from '../service/jaw.service';

@Component({
  selector: 'asm-jaw',
  templateUrl: './jaw.component.html',
  styleUrls: ['./jaw.component.scss']
})
export class JawComponent implements OnChanges {
  @Input() teethNumbers: Array<number>;
  @Input() isReadOnly = false;
  @Input() topJawLabel = 'TOP';
  @Input() teeth: Array<Tooth>;

  @Output() teethChange = new EventEmitter<Array<Tooth>>();
  @Output() toothClick = new EventEmitter<Tooth>();
  @Output() toothMouseOver = new EventEmitter<Tooth>();
  @Output() toothMouseOut = new EventEmitter<Tooth>();

  private _teeth: Array<Tooth>;

  constructor(private jawService: JawService) {
    this._teeth = this.createTeethArray();
  }

  ngOnChanges(changes: SimpleChanges) {
    this._teeth = this.mergeToothArrays(
      this.createTeethArray(),
      this.teeth
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

  toothTrackByFn(index: number, item: Tooth) {
    return item.id;
  }

  private createTeethArray() {
    const teeth = this.jawService.createDefaultTeethArray();

    if (this.teethNumbers) {
      return teeth.filter(t => {
        return this.teethNumbers.find(n => n === t.id);
      });
    } else {
      return teeth;
    }
  }

  private isModifiedTooth(tooth: Tooth): boolean {
    return (tooth.selected || !!tooth.styleClass);
  }

  private getModifiedTeeth(teeth: Array<Tooth>): Array<Tooth> {
    return teeth.filter(this.isModifiedTooth);
  }

  private mergeToothArrays(src: Array<Tooth>, dst: Array<Tooth>): Array<Tooth> {
    return src.map(tooth => {
      const found = (dst || []).find(t => t.id === tooth.id);
      return { ...tooth, ...found };
    });
  }
}
