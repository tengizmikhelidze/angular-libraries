import {Directive, ElementRef, Input} from '@angular/core';
import {TransliterationOptions} from "./interfaces/transliteration-options.interface";
import {FromTo} from "./consts/from-to.const";

@Directive({
  selector: 'transliteration'
})
export class NgxTransliterationDirective {
  @Input() transliterationOptions: TransliterationOptions = {
    to: "geo",
  }
  constructor(private el: ElementRef<HTMLInputElement>) {
    el.nativeElement.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  onKeyDown(event: KeyboardEvent){
    if(!this.isCharClicked(event)) return true;
    event.preventDefault();
    this.replaceLastChar(this.transformFromTo(event, this.findCorrectEnum()))
    return false;
  }

  transformFromTo(event: KeyboardEvent, language: Object): string{
    let findASCII = language[event.key.charCodeAt(0).toString() as keyof typeof language] as unknown as string;
    if(!!findASCII) return findASCII;

    return language[event.key as keyof typeof language] as unknown as string || event.key;
  }

  isCharClicked(event: KeyboardEvent): boolean{
    return event.code.includes("Key")
  }

  findCorrectEnum() : Object {
    if(this.transliterationOptions.language) return this.transliterationOptions.language;

    let findEnum = FromTo[this.transliterationOptions.to as keyof typeof FromTo]
    if(!!findEnum) return findEnum;

    return {}
  }

  replaceLastChar(char: string) {
    let lastCharIndex = this.el.nativeElement.value.length;
    this.el.nativeElement.value = this.el.nativeElement.value.slice(0,lastCharIndex) + char;
  }
}
@Directive({
  selector: 'input[transliterate]'
})
export class NgxTransliterationInputDirective extends NgxTransliterationDirective{}

@Directive({
  selector: 'textarea[transliterate]'
})
export class NgxTransliterationTextareaDirective extends NgxTransliterationDirective{}
