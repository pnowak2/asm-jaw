import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JawComponent } from './jaw.component';
import { JawService } from './jaw.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    JawComponent
  ],
  declarations: [
    JawComponent
  ],
  providers: [
    JawService
  ]
})
export class JawModule { }
