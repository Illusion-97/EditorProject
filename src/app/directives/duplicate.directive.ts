import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDuplicate]'
})
export class DuplicateDirective {

  constructor(private rendered : ViewContainerRef, private template : TemplateRef<any>) { }

  @Input()
  set appDuplicate(value : any) {
    this.rendered.createEmbeddedView(this.template)
    this.rendered.createEmbeddedView(this.template)
  }

}
