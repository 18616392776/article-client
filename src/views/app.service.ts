import { Injectable } from '@angular/core';
import { UiHttp } from 'tanbo-ui';

@Injectable()
export class AppService {
    constructor(private http: UiHttp) {
    }

    addArticle(article: any) {
        return this.http.post('/article/add', {
            body: article
        });
    }

    getArticle(id: string | number) {
        return this.http.get('/article/get', {
            params: {
                id
            }
        });
    }

    updateArticle(article: any) {
        return this.http.post('/article/update', {
            body: article
        });
    }

    publishArticle(article: any) {
        return this.http.post('/article/publish', {
            body: article
        });
    }
}