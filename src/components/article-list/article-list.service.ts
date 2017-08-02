import { Injectable } from '@angular/core';
import { UiHttp } from 'tanbo-ui';

@Injectable()
export class ArticleListService {
    constructor(private http: UiHttp) {
    }

    getArticles(currentPage: number, pageSize: number = 10) {
        return this.http.get('/article/get-list', {
            params: {
                currentPage,
                pageSize
            }
        });
    }
}