import {Directive, ElementRef, Input} from '@angular/core';
@Directive({
  selector: '[appCounterOf]'
})
export class CounterOfDirective {

  @Input() counter: number;

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
class CounterDirectiveContext {
  constructor(public $implicit: any) { }
}
