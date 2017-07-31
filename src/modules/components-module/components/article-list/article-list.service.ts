import { Injectable } from '@angular/core';
import { UiHttp } from 'tanbo-ui';

@Injectable()
export class ArticleListService {
    constructor(private http: UiHttp) {
    }

    getArticls() {
        return this.http.get('/api/get-articles');
    }
}