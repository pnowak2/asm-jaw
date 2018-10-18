import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Boob } from '../model/boob.model';

@Component({
  selector: 'asm-boobs',
  templateUrl: './boob.component.html',
  styleUrls: ['./boob.component.scss']
})
export class BoobComponent {
  @Input() boobs: Array<Boob>;
  @Output() boobClick = new EventEmitter<Boob>();

  onBoobClick(boob: Boob) {

  }
}
