import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransliterationRoutingModule } from './transliteration-routing.module';
import { TransliterationComponent } from './transliteration.component';
import {NgxTransliterationModule} from "ngx-transliteration";


@NgModule({
  declarations: [
    TransliterationComponent
  ],
  imports: [
    CommonModule,
    TransliterationRoutingModule,
    NgxTransliterationModule
  ]
})
export class TransliterationModule { }
