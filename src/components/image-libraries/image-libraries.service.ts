import { Injectable } from '@angular/core';
import { UiHttp } from 'tanbo-ui';

@Injectable()
export class ImageLibrariesService {
    constructor(private http: UiHttp) {
    }

    uploadImg(data: FormData) {
        return this.http.upload('/image/upload', {
            body: data
        });
    }
}