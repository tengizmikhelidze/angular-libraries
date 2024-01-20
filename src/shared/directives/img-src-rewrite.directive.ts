import {Directive, ElementRef} from '@angular/core';
import {environment} from "@environments/environment";

@Directive({
  selector: 'img[ImgSrcRewrite]',
  standalone: true
})
export class ImgSrcRewriteDirective {

  constructor(private el: ElementRef<HTMLImageElement>) {
    this.rewriteSrc()
  }

  rewriteSrc(){
    let split = this.el.nativeElement.src.split("/");
    split.splice(0,3);
    this.el.nativeElement.src = environment.apiUrl + split.join("/");
  }
}
