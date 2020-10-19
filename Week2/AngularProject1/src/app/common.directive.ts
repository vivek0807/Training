import {Directive, ElementRef, HostListener,Renderer2} from '@angular/core';
@Directive({
  selector: '[common-Directive]'
})

export class CommonDirective {
  constructor(private el : ElementRef, private renderer : Renderer2) {
    console.log(el.nativeElement);
  }

  @HostListener("mouseenter")
  highlight(){
    var el=this.el;
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }

  @HostListener("mouseleave")
  downlight(){
    var el=this.el;
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
  }
}
