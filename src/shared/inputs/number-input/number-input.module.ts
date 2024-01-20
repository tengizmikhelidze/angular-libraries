import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NumberInputComponent} from "./number-input.component";

@NgModule({
  declarations: [
    NumberInputComponent
  ],
  exports: [
    NumberInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class NumberInputModule {

}
