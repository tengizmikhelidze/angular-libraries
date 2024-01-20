import {Directive, Inject, Injector, OnInit} from '@angular/core';
import {ControlValueAccessor, NgControl,} from '@angular/forms';
import {throwError} from 'rxjs';

@Directive({
  selector: '[appControlValueAccessor]',
  standalone: true,
})
export class NgControlControlValueAccessorDirective<T>
  implements ControlValueAccessor, OnInit
{
  control!: NgControl;
  public isDisabled: boolean = false;
  private _value: T | undefined;
  // Whatever name for this (myValue) you choose here, use it in the .html file.
  public get myValue(): T | undefined { return this._value }
  public set myValue(v: T | undefined) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }
  onChange = (v: T | undefined) => { };
  onTouched = () => { };

  constructor(@Inject(Injector) private injector: Injector) {}

  ngOnInit() {
    this.setFormControl();
  }

  setFormControl() {
    try {
      this.control = this.injector.get(NgControl);
    } catch (err) {
      throwError(()=> new Error("Now Ng Control Bind"))
    }
  }

  writeValue(value: any): void {
    this.myValue = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }
}
