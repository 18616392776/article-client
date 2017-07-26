import { Component } from '@angular/core';

@Component({
    selector: 'tb-image-libraries',
    templateUrl: './image-libraries.component.html',
    styleUrls: ['./image-libraries.component.scss']
})
export class ImageLibrariesComponent {
    images: Array<any> = [
        require('../../../../assets/images/1.jpeg'),
        require('../../../../assets/images/2.jpg'),
        require('../../../../assets/images/3.jpg'),
        require('../../../../assets/images/4.jpeg'),
    ];
}