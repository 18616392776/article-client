import { Position } from '../services/drag-coordinates.service';

export function collTest(p1: Position, p2: Position) {
    return !(
        p1.left > p2.right ||
        p1.right < p2.left ||
        p1.top > p2.bottom ||
        p1.bottom < p2.top
    );
}