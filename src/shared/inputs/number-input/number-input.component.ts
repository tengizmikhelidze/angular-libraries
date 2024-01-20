import {Component, forwardRef, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ControlValueAccessorDirective} from "../directive/inputs.directive";

type InputType = 'text' | 'number' | 'email' | 'password';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberInputComponent),
      multi: true,
    },
  ],
})
export class NumberInputComponent<T> extends ControlValueAccessorDirective<number> {
  @Input() inputId = '';
  @Input() label = '';
}
