import {Component, forwardRef, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {NgControlControlValueAccessorDirective} from "../../directive/inputs-ng-control.directive";
@Component({
  selector: 'app-number-input-ngModel',
  templateUrl: './number-input-ng-control.component.html',
  styleUrls: ['./number-input-ng-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberInputNgControlComponent),
      multi: true,
    },
  ],
})
export class NumberInputNgControlComponent<T> extends NgControlControlValueAccessorDirective<number> {
  @Input() inputId = '';
  @Input() label = '';
}
