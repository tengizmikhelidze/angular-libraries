import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransliterationRoutingModule } from './transliteration-routing.module';
import { TransliterationComponent } from './transliteration.component';
import {ImgSrcRewriteDirective} from "../../../shared/directives/img-src-rewrite.directive";


@NgModule({
  declarations: [
    TransliterationComponent
  ],
  imports: [
    CommonModule,
    TransliterationRoutingModule,
    ImgSrcRewriteDirective
  ]
})
export class TransliterationModule { }
