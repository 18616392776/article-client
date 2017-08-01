import { Component, OnInit, ElementRef, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { DragCoordinatesService, Position } from '../../services/drag-coordinates.service';
import { getPosition } from '../../utils/position';
import { collTest } from '../../utils/collision-test';

@Component({
    selector: 'tb-component-container',
    templateUrl: './component-container.component.html',
    styleUrls: ['./component-container.component.scss']
})
export class ComponentContainerComponent implements OnInit {
    @Input()
    offsetDistanceTop: number = 0;
    @HostBinding('class.drag-in')
    isDragIn: boolean = false;

    @Output()
    setup = new EventEmitter<string>();

    constructor(private elementRef: ElementRef,
                private dragCoordinatesService: DragCoordinatesService) {
    }

    ngOnInit() {
        let selfPosition: Position;
        this.dragCoordinatesService.$dragStart.subscribe(() => {
            let nativeEle = this.elementRef.nativeElement;
            let d = getPosition(nativeEle);
            selfPosition = {
                left: d.x,
                top: d.y - this.offsetDistanceTop,
                right: d.x + nativeEle.offsetWidth,
                bottom: d.y - this.offsetDistanceTop + nativeEle.offsetHeight
            };
        });
        this.dragCoordinatesService.$position.subscribe((p: Position) => {
            this.isDragIn = collTest(p, selfPosition);
        });
        this.dragCoordinatesService.$dragEnd.subscribe((type: string) => {
            if (this.isDragIn) {
                this.setup.emit(type);
            }
            this.isDragIn = false;
        });
    }
}