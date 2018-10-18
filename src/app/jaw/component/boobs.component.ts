import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Boob } from '../model/boob.model';

@Component({
  selector: 'asm-boobs',
  templateUrl: './boobs.component.html',
  styleUrls: ['./boobs.component.scss']
})
export class BoobsComponent {
  @Input() boobs: Array<Boob>;
  @Output() boobClick = new EventEmitter<Boob>();

  onBoobClick(boob: Boob) {

  }
}
