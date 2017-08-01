import { Injectable } from '@angular/core';
import { UiHttp } from 'tanbo-ui';

@Injectable()
export class AppService {
    constructor(private http: UiHttp) {
    }

    addArticle(article: any) {
        return this.http.post('/add-article', {
            body: article
        });
    }
}