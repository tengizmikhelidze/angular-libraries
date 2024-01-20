import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NumberInputFormControlComponent} from "./form-control/number-input-form-control.component";
import {NumberInputNgControlComponent} from "./ng-control/number-input-ng-control.component";

@NgModule({
  declarations: [
    NumberInputFormControlComponent,
    NumberInputNgControlComponent
  ],
  exports: [
    NumberInputFormControlComponent,
    NumberInputNgControlComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class NumberInputModule {

}
