import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JawModule } from './jaw/jaw.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JawModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
