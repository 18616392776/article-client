import { Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'tb-image-preview',
    templateUrl: './image-preview.component.html',
    styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent {
    @Input()
    imgSrc: string;
    constructor(@Inject(DOCUMENT) private document: Document) {
    }

    copy(input: HTMLInputElement) {
        input.select();
        this.document.execCommand('Copy');
    }
}