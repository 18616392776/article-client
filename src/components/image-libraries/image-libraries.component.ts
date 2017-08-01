import { Component, ViewChild, ElementRef } from '@angular/core';

import { ImageLibrariesService } from './image-libraries.service';

@Component({
    selector: 'tb-image-libraries',
    templateUrl: './image-libraries.component.html',
    styleUrls: ['./image-libraries.component.scss'],
    providers: [
        ImageLibrariesService
    ]
})
export class ImageLibrariesComponent {
    @ViewChild('fileupload')
    fileInput: ElementRef;
    images: Array<any> = [
        require('../../assets/images/1.jpeg'),
        require('../../assets/images/2.jpg'),
        require('../../assets/images/3.jpg'),
        require('../../assets/images/4.jpeg'),
    ];

    constructor(private imageLibrariesService: ImageLibrariesService) {
    }

    upload() {
        const form = new FormData();
        const files = this.fileInput.nativeElement.files;
        for (let i = 0; i < files.length; i++) {
            form.append('fileName', files[i]);
        }

        this.imageLibrariesService.uploadImg(form).then(response => {
            console.log(response);
        });
    }
}