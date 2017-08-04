import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { ImageLibrariesService } from './image-libraries.service';

@Component({
    selector: 'tb-image-libraries',
    templateUrl: './image-libraries.component.html',
    styleUrls: ['./image-libraries.component.scss'],
    providers: [
        ImageLibrariesService
    ]
})
export class ImageLibrariesComponent implements OnInit {
    @ViewChild('fileupload')
    fileInput: ElementRef;

    currentPage: number = 1;
    pages: number = 1;

    dataList: Array<any> = [];

    constructor(private imageLibrariesService: ImageLibrariesService) {
    }

    ngOnInit() {
        this.imageLibrariesService.getList(this.currentPage, 18).then(response => {
            if (response.success) {
                response.data.dataList.forEach((item: any) => {
                    item.url = '/public/' + item.url;
                });
                this.dataList = response.data.dataList;
                this.pages = response.data.pages;
            }
        })
    }

    upload() {
        const form = new FormData();
        const files = this.fileInput.nativeElement.files;
        for (let i = 0; i < files.length; i++) {
            form.append('fileName', files[i]);
        }

        this.imageLibrariesService.uploadImg(form).then(response => {
            if (response.success) {
                response.data.dataList.forEach((item: any) => {
                    item.url = '/public/' + item.url;
                    this.dataList.push(item);
                });
            }
        });
    }
}