import { Directive, ElementRef, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[renklendir]',
})
export class Renklendir {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') method1() {
    this.el.nativeElement.style.color = 'red';
    console.log('Mouse Entered');
  }

  @HostListener('mouseleave') method2() {
    this.el.nativeElement.style.color = 'black';
    console.log('Mouse Left');
  }

}

