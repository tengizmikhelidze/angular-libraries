import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxTransliterationModule} from "../../projects/ngx-transliteration/src/lib/ngx-transliteration.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTransliterationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
