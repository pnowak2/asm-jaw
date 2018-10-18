import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoobsModule } from './jaw/boobs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BoobsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
