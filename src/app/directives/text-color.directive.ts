import {Directive, ElementRef, Input} from '@angular/core';
import {DuplicateDirective} from "./duplicate.directive";

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {

  // ElementRef : Référence à l'élément du dom concerné
  constructor(private element: ElementRef) {
    element.nativeElement.style.color = 'red'
  }

  @Input()
  set appTextColor(color : string) {
    this.element.nativeElement.style.color = color
  }

}
