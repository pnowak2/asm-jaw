import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JawComponent } from './component/jaw.component';
import { JawService } from './service/jaw.service';

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
