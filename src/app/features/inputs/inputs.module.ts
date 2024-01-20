import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputsRoutingModule} from './inputs-routing.module';
import {InputsComponent} from './inputs.component';
import {NumberInputModule} from "../../../shared/inputs/number-input/number-input.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    InputsComponent
  ],
  imports: [
    CommonModule,
    InputsRoutingModule,
    NumberInputModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class InputsModule { }
