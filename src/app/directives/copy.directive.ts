import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCopy]'
})
export class CopyDirective {
  @Input('appCopy') copyStr: string;

  @HostListener('click', ['$event'])
  onClick($event) {
    const textarea = this.r2.createElement('textarea');
    this.r2.setStyle(textarea, 'position', 'fixed');
    this.r2.setStyle(textarea, 'top', '-100px');
    this.r2.setStyle(textarea, 'left', '-100px');
    textarea.value = this.copyStr;
    this.r2.appendChild(this.el.nativeElement, textarea);
    textarea.select();
    document.execCommand('copy');
    this.r2.removeChild(this.el.nativeElement, textarea);
  }

  constructor(private el: ElementRef, private r2: Renderer2) {}
}
