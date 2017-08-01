import { Component, HostListener, Renderer2, ElementRef, Inject, OnInit, Input } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { DragCoordinatesService } from '../../services/drag-coordinates.service';
import { getPosition } from '../../utils/position';

@Component({
    selector: 'tb-component-nav-item',
    templateUrl: './component-nav-item.component.html',
    styleUrls: ['./component-nav-item.component.scss']
})
export class ComponentNavItemComponent implements OnInit {
    @Input()
    type: string = 'markdown';
    @Input()
    isEdit: boolean = true;
    private innerHTML: string;

    constructor(@Inject(DOCUMENT) private document: Document,
                private elementRef: ElementRef,
                private renderer: Renderer2,
                private dragCoordinatesService: DragCoordinatesService) {
    }

    ngOnInit() {
        this.innerHTML = this.elementRef.nativeElement.innerHTML;
    }

    @HostListener('mousedown', ['$event'])
    mouseDown(event: any) {
        if (!this.isEdit) {
            return;
        }
        const oldX = event.pageX;
        const oldY = event.pageY;
        this.dragCoordinatesService.publishDragStart();

        const nativeEle = this.elementRef.nativeElement;

        const copyEle = this.document.createElement('div');
        copyEle.innerHTML = this.innerHTML;
        copyEle.className = nativeEle.className;

        const width = nativeEle.offsetWidth;
        const height = nativeEle.offsetHeight;
        const position = getPosition(nativeEle);

        copyEle.style.cssText = `
        position: absolute;
        cursor: pointer;
        box-shadow: 2px 2px 4px rgba(0,0,0,.4);
        color: #fff;
        background-color: #0077bb;
        width: ${nativeEle.offsetWidth}px;
        height: ${nativeEle.offsetHeight}px;
        left: ${nativeEle.offsetLeft}px;
        top:${nativeEle.offsetTop}px`;

        nativeEle.parentNode.appendChild(copyEle);

        const cancelMoveFn = this.renderer.listen('document', 'mousemove', (event: any) => {
            const x = event.pageX - oldX;
            const y = event.pageY - oldY;

            this.dragCoordinatesService.updatePosition({
                left: position.x + x,
                right: position.x + width + x,
                top: position.y + y,
                bottom: position.y + height + y
            });

            copyEle.style.transform = `translate(${x}px, ${y}px)`;
        });
        const cancelUpFn = this.renderer.listen('document', 'mouseup', () => {
            nativeEle.parentNode.removeChild(copyEle);
            this.dragCoordinatesService.publishDragEnd(this.type);
            cancelMoveFn();
            cancelUpFn();
        });
    }
}