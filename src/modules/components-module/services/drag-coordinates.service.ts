import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface Position {
    top: number;
    right: number;
    bottom: number;
    left: number;
}

@Injectable()
export class DragCoordinatesService {
    $dragStart: Observable<any>;
    $position: Observable<Position>;
    $dragEnd: Observable<any>;
    private dragStartSource = new Subject<any>();
    private positionSource = new Subject<any>();
    private dragEndSource = new Subject<string>();

    constructor() {
        this.$dragStart = this.dragStartSource.asObservable();
        this.$position = this.positionSource.asObservable();
        this.$dragEnd = this.dragEndSource.asObservable();
    }

    publishDragStart() {
        this.dragStartSource.next();
    }

    updatePosition(position: Position) {
        this.positionSource.next(position);
    }

    publishDragEnd(type: string) {
        this.dragEndSource.next(type);
    }
}