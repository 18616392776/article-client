import { Component, Input, Output, EventEmitter } from '@angular/core';

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
    currentMode: any;

    @Output()
    focus = new EventEmitter<any>();

    @Output()
    change = new EventEmitter<any>();

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