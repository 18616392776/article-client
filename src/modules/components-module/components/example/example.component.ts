import { Component, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

@Component({
    selector: 'tb-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
    @Input()
    docs: Array<any> = [];
    @Input()
    isEdit: boolean = true;
    @Input()
    currentComponent: any;
    @Output()
    focus = new EventEmitter<any>();
    @Output()
    change = new EventEmitter<any>();

    scrollTop: number = 0;

    @HostListener('scroll')
    scroll() {
        this.scrollTop = this.elementRef.nativeElement.scrollTop;
    }

    constructor(private elementRef: ElementRef) {
    }

    onFocus(item: any) {
        if (this.isEdit) {
            this.focus.emit(item);
        }
    }

    edit(type: string, index: number, targetType?: string) {
        this.change.emit({
            type,
            index,
            targetType
        });
    }
}