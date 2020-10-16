import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[cardHeader]'
})
export class CardHeaderDirective 
{

    @HostListener('mouseover') onMouseOver()
    {
        const cartheaderHover = this.el.nativeElement.children[0];
        this.renderer.setStyle(cartheaderHover, 'display', 'flex');
    }

    @HostListener('mouseout') onMouseOut()
    {
        const cartheaderHover = this.el.nativeElement.children[0];
        this.renderer.setStyle(cartheaderHover, 'display', 'none');
    }

    constructor(
        private el: ElementRef, 
        private renderer: Renderer2
    )
    {}

}