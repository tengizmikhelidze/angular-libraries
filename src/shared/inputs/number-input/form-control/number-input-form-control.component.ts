import {Component, forwardRef, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {FormControlControlValueAccessorDirective} from "../../directive/inputs-form-control.directive";

@Component({
  selector: 'app-number-input-formControl',
  templateUrl: './number-input-form-control.component.html',
  styleUrls: ['./number-input-form-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberInputFormControlComponent),
      multi: true,
    },
  ],
})
export class NumberInputFormControlComponent<T> extends FormControlControlValueAccessorDirective<number> {
  @Input() inputId = '';
  @Input() label = '';
}
