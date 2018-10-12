import { Component, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Tooth } from './tooth.model';
import { JawService } from './jaw.service';

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

  constructor(private jawService: JawService) {
    this._teeth = jawService.createDefaultTeethArray();
  }

  ngOnChanges(changes: SimpleChanges) {
    const changedTeeth = changes['teeth'].currentValue as Array<Tooth>;

    this._teeth = this.mergeToothArrays(
      this.jawService.createDefaultTeethArray(),
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

  toothTrackByFn(index: number, item: Tooth) {
    return item.id;
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
      // return (dst || []).find(t => t.id === tooth.id) || tooth;
    });
  }
}
