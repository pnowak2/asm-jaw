import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'asm-jaw',
  templateUrl: './jaw.component.html',
  styleUrls: ['./jaw.component.scss']
})
export class JawComponent implements OnInit {
  @Output() selected = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
