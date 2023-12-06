import {NgModule} from '@angular/core';
import {
  NgxTransliterationDirective,
  NgxTransliterationInputDirective,
  NgxTransliterationTextareaDirective
} from './ngx-transliteration.directive';


@NgModule({
  declarations: [
    NgxTransliterationDirective,
    NgxTransliterationInputDirective,
    NgxTransliterationTextareaDirective
  ],
  imports: [
  ],
  exports: [
    NgxTransliterationDirective,
    NgxTransliterationInputDirective,
    NgxTransliterationTextareaDirective
  ]
})
export class NgxTransliterationModule { }
